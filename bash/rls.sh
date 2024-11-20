#!/usr/bin/env bash

VERSION="1.0.0"
REMOTE_ADDRESS="124.222.19.90"
DOCS_HUB_PATH="/root/apps/docshub"
PWD_PATH="/usr/local/etc/apps-config/apps.conf"

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
    build
    name="dist-$(date +"%m%d%Y").tar.gz"
    read -r -p "[Warning] Current name of result is $name, please check it.\n" new_name
    if [ -n "$new_name" ]; then
        name="$new_name"
    fi
    echo -e "[INFO] Start sending...\n"
    tar -cvf "$name" ./dist
    config=$(cat "$PWD_PATH")
    password=$(echo "$config" | grep common= | awk -F= '{print $2}')
    # Send the result to server and remove local tar file
    sshpass -p "$password" scp "$name" "root@$REMOTE_ADDRESS:$DOCS_HUB_PATH/releases"
    rm -f "$name"
    rm -rf ./dist
    echo "[INFO] Congratulations, sending task has been done!"
}

# Used to deploy the app on server
deploy() {
    if [ -d "$DOCS_HUB_PATH/live" ]; then
        rm -rf "$DOCS_HUB_PATH/live"
    fi
    mkdir "$DOCS_HUB_PATH/live"
    # select target file
    files="$(ls -t $DOCS_HUB_PATH/releases/)"
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
    tar -xvf "$DOCS_HUB_PATH/releases/$file" -C "$DOCS_HUB_PATH/live"
    echo -e "[INFO] $file content has been placed at $DOCS_HUB_PATH/live.\n"
    # restart the nginx
    nginx -s reload
}

# update bash/rls.sh and upload to server
update_bash() {
    echo "[INFO] Start updating bash/rls.sh..."
    config=$(cat "$PWD_PATH")
    password=$(echo "$config" | grep common= | awk -F= '{print $2}')
    sshpass -p "$password" scp ./bash/rls.sh "root@$REMOTE_ADDRESS:$DOCS_HUB_PATH/rls.sh"
    echo "[INFO] Congratulations, updating task has been done."
}

main() {
    echo -e "Welcome to kk-cron basher! Version is $VERSION\n"
    echo "COMMANDS:
    1. Build - build a Go app.
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
