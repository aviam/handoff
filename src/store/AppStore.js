import { observable, autorun } from 'mobx'
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge'

class AppStore {
  
  @observable username = ''
  @observable user = {}
  @observable post_count = 0
  @observable order_count = 0
  @observable chat_count = 0
  @observable new_messages = 0
  @observable current_page = ''
  @observable current_puid = ''
  @observable tracker = new GoogleAnalyticsTracker('UA-xxxx-x')
  @observable onesignal_app_id = "4791a600-b19f-48f9-9840-f7c7efd1b47f"
  @observable onesignal_api_key = "NTZjNWExNDYtNzMwYS00N2I5LWFkM2YtZGFhM2Q0Y2RkNzBi"
}

const appStore = new AppStore()

/*
autorun(() => {
  console.log(appStore)
})
*/

export default appStore
