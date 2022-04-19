from urllib3 import encode_multipart_formdata
import os
import requests


def upload_source_file_to_sentry(path, url, token):
    # 获取文件
    files = os.listdir(path)
    # 遍历文件，读取文件内容，上传到指定路径
    for file in files:
        target_path = path + "/" + file
        with open(target_path, mode='r', encoding='utf8') as f:
            file = {
                "file": (target_path, f.read()),
                # 很关键，如果不指定会去源地址寻找，不会在 sentry 缓存内寻找
                "name": "~/js/" + file
            }
            encode_data = encode_multipart_formdata(file)
            file_data = encode_data[0]
            headers_from_data = {
                "Content-Type": encode_data[1],
                "Authorization": "Bearer " + token
            }
            res = requests.post(url=url, headers=headers_from_data, data=file_data).json()
            print(res)


if __name__ == '__main__':
    # 本地文件目录
    path = "Path/to/sourcemap"
    url = "[doamin]/api/0/projects/{organization_slug}/{project_slug}/releases/{version}/files/"
    token = "token"
    upload_source_file_to_sentry(path, url, token)
