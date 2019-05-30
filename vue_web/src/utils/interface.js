import request from '@/utils/request'

// 音乐列表
export function musicList(data) {
  return request({
    method: 'get',
    url: 'music/get_music_list',
    params: data
  })
}
// 歌曲信息
export function songList(data) {
  return request({
    method: 'get',
    url: 'music/get_song_list',
    params: data
  })
}
