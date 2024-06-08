class Notification {
    constructor(notificationID, createdTime, content, receiver) {
        this.notificationID = notificationID;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }

    send() {
        return console.log(`Notification has been sent to ${this.receiver}`);
    };
 };

class EmailNotification extends Notification { 
    constructor(notificationID, createdTime, content, receiver) {
        super(notificationID, createdTime, content, receiver);
    }
};

class SMSNotification extends Notification { 
    constructor(notificationID, createdTime, content, phoneNumber) {
        super(notificationID, createdTime, content);
        this.phoneNumber = phoneNumber;
    }
    phoneSend() {
        return console.log(`Notification has been sent to ${this.phoneNumber}`);
    }
};

let emailNotification = new EmailNotification(1,"11:20","Hello","techup@gmail.com");
emailNotification.send();
  
let smsNotification = new SMSNotification(2, "11:20", "Hello", "099-9999999");
smsNotification.send();