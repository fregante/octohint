import Adapter from './adapter'

class SafariAdapter extends Adapter {
  addListener(cb) {
    safari.application.addEventListener(
      'message',
      (e: SafariExtensionMessageEvent) => {
        cb(e.message, message => {
          const tab = e.target as SafariBrowserTab
          tab.page.dispatchMessage('message', message)
        })
      },
      false,
    )
  }

  // Not supported at Safari
  addTabUpdateListener() {}
}

new SafariAdapter()
