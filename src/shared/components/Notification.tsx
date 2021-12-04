import { subscribeToPublicNotifications } from 'shared/queries'
import { toast } from 'react-hot-toast'
import { useSubscription } from '@apollo/client'

const Notification = () => {
  const { data } = useSubscription(subscribeToPublicNotifications)
  console.log({ socket: data })

  return null
}

export default Notification
