
export function fullScreen() {
  console.log('hello')
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

  
