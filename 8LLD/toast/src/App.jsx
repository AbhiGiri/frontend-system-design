// import Notification from "./components/Notification"
import useNotification from "./hooks/useNotification";

function App() {
  const { NotificationComponent, triggerNotification } = useNotification("bottom-right");

  return (
    <div>
      {/* <Notification type="info"  message={'New Message Completed'}/> */}
      <button onClick={() => triggerNotification({ type: "success", message: "File sent successfully", duration: 3000 })}>
        Trigger Success
      </button>

      {/* <button
        onClick={() => triggerNotification({
          type: "info",
          message: "File info to send",
          duration: 3000
        })}
      >Trigger Info</button>

      <button
        onClick={() => triggerNotification({
          type: "error",
          message: "File failed to send",
          duration: 3000
        })}
      >Trigger Error</button> */}

      {NotificationComponent}

    </div>
  )
}

export default App
