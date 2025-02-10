#!/usr/bin/env bash

VERSION="1.0.0"
# DOCS_HUB_PATH="/root/apps/docshub"
PWD_PATH="/usr/local/etc/kk.conf"

# set global variables
password=""
host=""
docs_hub_path=""

get_conf() {
    config=$(cat "$PWD_PATH")
    password=$(echo "$config" | grep PASSWD= | awk -F= '{print $2}')
    host=$(echo "$config" | grep HOST= | awk -F= '{print $2}')
    base_dir=$(echo "$config" | grep DIR= | awk -F= '{print $2}')
    docs_hub_path="$base_dir/docshub"
}

build() {
    cd /Users/yango/github/react/docshub || exit
    echo "[INFO] Start building docshub..."
    prev=$(date -u +"%s")
    yarn build
    # Count the time cost (seconds)
    current=$(date -u +"%s")
    diff=$((current - prev))
    echo "[INFO] Congratulations, building docshub has cost $diff s"
}

send() {
    get_conf
    build
    name="dist-$(date +"%m%d%Y").tar.gz"
    read -r -p "[Warning] Current name of result is $name, please check it.\n" new_name
    if [ -n "$new_name" ]; then
        name="$new_name"
    fi
    echo -e "[INFO] Start sending...\n"
    tar -cvf "$name" ./dist
    # Send the result to server and remove local tar file
    sshpass -p "$password" scp "$name" "root@$host:$docs_hub_path/release"
    rm -f "$name"
    rm -rf ./dist
    echo "[INFO] Congratulations, sending task has been done!"
}

# update bash/rls.sh and upload to server
update_bash() {
    get_conf
    echo "[INFO] Start updating bash/rls.sh..."
    sshpass -p "$password" scp ./bash/rls.sh "root@$host:$docs_hub_path/rls.sh"
    echo "[INFO] Congratulations, updating task has been done."
}

# Used to deploy the app on server
deploy() {
    base_path="/root/apps/docshub"
    target_path="$base_path/dist"
    if [ -d "$target_path" ]; then
        rm -rf "$target_path"
    fi
    mkdir "$target_path"
    # select target file
    files="$(ls -t $base_path/release/)"

    echo "Please select the target file:"

    select file in $files; do
        if [ -n "$file" ]; then
            echo "You have selected $file"
            break
        else
            echo "Invalid input, please try again."
        fi
    done
    # unzip the target file
    tar -xvf "$base_path/release/$file" -C "$target_path"
    echo -e "[INFO] $file content has been placed at $target_path.\n"
    # restart the nginx
    nginx -s reload
}

main() {
    echo -e "Welcome to kk-cron basher! Version is $VERSION\n"
    echo "COMMANDS:
    1. Build - build a Docusaurus app.
    2. Send - send the build result to server.
    3. Deploy - deploy the app on server.
    4. Update bash/rls.sh - update bash/rls.sh and upload to server.
    0. Exit - exit the program.
    "
    read -r -p "Please input your choice: " choice
    case $choice in
    1)
        build
        ;;
    2)
        send
        ;;
    3)
        deploy
        ;;
    4)
        update_bash
        ;;
    0)
        exit 0
        ;;
    *)
        echo "Invalid input, please try again."
        main
        ;;
    esac
}

main
