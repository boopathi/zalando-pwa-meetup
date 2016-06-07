self.addEventListener('push', function(event){
	var options = {
    body: 'Hello!',
    icon: './static/zalando.png',
    tag: 'push-notification-tag',
    data: {
      url: 'https://www.zalando.de/'
    }
  };
  return self.registration
    .showNotification('Zalando PWA Notification', options);
});

self.addEventListener('notificationclick', function(event){
  event.notification.close();

  event.waitUntil(
    Promise.resolve(
      clients.openWindow(event.notification.data.url)
    )
  );
});