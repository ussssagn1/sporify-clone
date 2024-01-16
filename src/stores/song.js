import { defineStore } from 'pinia'
import artist from '../artist.json' // ИМПОРТ МУЗЫКИ

export const useSongStore = defineStore('song', {
  state: () => ({
    isPlaying: false,
    audio: null,              // ГЛАВНОЕ ХРАНИЛИЩЕ
    currentArtist: null,
    currentTrack: null
  }),
  actions: {
    loadSong(artist, track) { //ЗАГРУЗКА НОВОГО ТРЭКА ДЛЯ ВОСПРОИЗВЕДЕНИЯ
      this.currentArtist = artist
      this.currentTrack = track

      if (this.audio && this.audio.src) {
        this.audio.pause()
        this.isPlaying = false
        this.audio.src = ''
      }

      this.audio = new Audio()
      this.audio.src = track.path

      setTimeout(() => {
        this.isPlaying = true
        this.audio.play()
      }, 200)
    },

    playOrPauseSong() { // Воспроизводит или приостанавливает текущий трек
      if (this.audio.paused) {
        this.isPlaying = true
        this.audio.play()
      } else {
        this.isPlaying = false
        this.audio.pause()
      }
    },

    playOrPauseThisSong(artist, track) { // Воспроизводит или приостанавливает трек. Если трек не совпадает с текущим, загружает новый.
      if (!this.audio || !this.audio.src || (this.currentTrack.id !== track.id)) {
        this.loadSong(artist, track)
        return
      }

      this.playOrPauseSong()
    },

    prevSong(currentTrack) {
      let track = artist.tracks[currentTrack.id - 2]
      this.loadSong(artist, track)
    },

    nextSong(currentTrack) {
      if (currentTrack.id === artist.tracks.length) {
        let track = artist.tracks[0]
        this.loadSong(artist, track)
      } else {
        let track = artist.tracks[currentTrack.id]
        this.loadSong(artist, track)
      }
    },

    playFromFirst() {
      this.resetState()
      let track = artist.tracks[0]
      this.loadSong(artist, track)
    },

    resetState() {
      this.isPlaying = false
      this.audio = null
      this.currentArtist = null
      this.currentTrack = null
    }
  },
  persist: true
})