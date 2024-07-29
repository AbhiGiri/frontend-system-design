// import { useCallback, useState } from "react";
// import Notification from "../components/Notification";

// const useNotification = (position="top-right") => {
//   const [notification, setNotification] = useState(null);

//   let timer;

//   const triggerNotification = useCallback((notificationProps) => {
//     clearTimeout(timer);
//     setNotification(notificationProps);

//     timer = setTimeout(() => {
//       setNotification(null);
//     }, notificationProps.duration);
    
//   }, []);

//   const NotificationComponent = notification ? (
//     <div className={`${position}`}>
//       <Notification {...notification}/>
//     </div>
//   ) : null

// return { NotificationComponent, triggerNotification };

// };

// export default useNotification;
import { useCallback, useState } from "react";
import Notification from "../components/Notification";

const useNotification = (position="top-right") => {
  const [notifications, setNotification] = useState([]);
  // let timer;
  const triggerNotification = useCallback((notificationProps) => {
    // clearTimeout(timer);
    const id = Date.now();
    setNotification((prevNotifications) => [...prevNotifications, {...notificationProps, id}]);

    setTimeout(() => {
      setNotification((prevNotifications) => prevNotifications.filter((notification) => notification.id !== id));
    }, notificationProps.duration);
    
  }, []);

  const NotificationComponent = 
  <div className={`${position}`}>
   {notifications.map(notification => (
    <Notification key={notification.id} {...notifications} onClose={() => setNotification((prevNotifications) => prevNotifications.filter(n => n.id !== notification.id))}/>
  ))}
  </div>

return { NotificationComponent, triggerNotification };

};

export default useNotification;