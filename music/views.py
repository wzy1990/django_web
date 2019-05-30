# UTF-8
from django.shortcuts import render

from music.models import *
from django.http import JsonResponse, HttpRequest, QueryDict
from django.db.models.functions import TruncDate
import requests

# Create your views here.
def getMusicList(request):
    # 被爬取的接口
    web_url = 'http://www.ciding.fun/'
    # 请求头信息
    request_header = {
        'accept': 'application/json, text/javascript, */*; q=0.01',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh - CN, zh;q = 0.9',
        'host': 'www.ciding.fun',
        'origin': 'http://www.ciding.fun',
        'referer': 'http://www.ciding.fun/?name=%E4%BB%8A%E5%A4%9C%E4%BD%A0%E4%BC%9A%E4%B8%8D%E4%BC%9A%E6%9D%A5&type=netease',
        'user-agent': "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36"
    }
    # 传递的参数
    data = {
        'input': (None, '今夜你会不会来'),
        'filter': (None, 'name'),
        'type': (None, 'netease'),
        'page': (None, 1)
    }
    response = requests.post(url=web_url, files=data, headers=request_header, verify=False)
    # 返回json/dict格式数据

    print(response.text)
    musicList = []
    # if response.get('result'):
    #     musicList = response['result']['songs']

    return JsonResponse(musicList, safe=False, json_dumps_params={'ensure_ascii':False})

def getSongList(request):
    # 被爬取的接口
    web_url = 'https://api.imjad.cn/cloudmusic/'
    # 请求头信息
    request_header = {
        'accept': '* / *',
        'origin': 'http://www.66re.cn',
        'referer': 'http://www.66re.cn/vip/163.html',
        'user-agent': "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36"
    }
    # 传递的参数
    search_condition = {
        'type': request.GET.get("type"),
        'id': request.GET.get("id"),
        'br': request.GET.get("br")
    }
    data = requests.get(url=web_url, params=search_condition, headers=request_header)
    # 返回json/dict格式数据
    response = data.json()
    if response.get('data'):
        songList = response['data']

    return JsonResponse(songList, safe=False, json_dumps_params={'ensure_ascii':False})
