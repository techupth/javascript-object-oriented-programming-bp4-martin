class EmailNotification { 
    constructor(notificationID, createdTime, content, receiver) {
        this.notificationID = notificationID;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    };
    
    send() {
        return console.log(`Notification has been sent to ${this.receiver}`);
    }
};

class SMSNotification {
    constructor(notificationID, createdTime, content, phoneNumber) {
        this.notificationID = notificationID;
        this.createdTime = createdTime;
        this.content = content;
        this.phoneNumber = phoneNumber;
    };

    send() {
        return console.log(`Notification has been sent to ${this.phoneNumber}`);
    }
 };

 let firstEmail = new EmailNotification(1, "11:20", "Hello", "techup@gmail.com");
firstEmail.send();

let firstNumber = new SMSNotification(2, "11:20", "Hello", "099-9999999");
firstNumber.send();