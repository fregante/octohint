import Adapter from './adapters/chrome'

new Adapter()

// Need to request all sites permissions to get URL
// So it does work as expected

// chrome.browserAction.onClicked.addListener(tab => {
//   if (!tab.url) return
//   const { protocol, host } = new URL(tab.url)
//   const origins = [protocol + '//' + host + '/*']
//   console.log(origins)
//   chrome.permissions.request({ origins }, granted => {
//     console.log(granted)
//     if (!granted) return
//   })
// })
