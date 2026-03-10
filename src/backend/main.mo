import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {
  type MessageId = Nat;

  type ContactMessage = {
    id : MessageId;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
  };

  module ContactMessage {
    public func compare(msg1 : ContactMessage, msg2 : ContactMessage) : Order.Order {
      Nat.compare(msg1.id, msg2.id);
    };
  };

  var nextId : MessageId = 0;
  let messages = Map.empty<MessageId, ContactMessage>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text) : async MessageId {
    let contactMessage : ContactMessage = {
      id = nextId;
      name;
      email;
      phone;
      message;
    };
    messages.add(nextId, contactMessage);
    nextId += 1;
    contactMessage.id;
  };

  public query ({ caller }) func getAllMessages() : async [ContactMessage] {
    messages.values().toArray().sort();
  };
};
