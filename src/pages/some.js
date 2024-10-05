Smooch.init({
  integrationId: "65674e4462251d1db03ec8a9",
  integrationOrder: [],
  notificationChannelPromptEnabled: !1,
  canUserSeeConversationList: !1,
  businessName: "NordVPN Support",
  prechatCapture: { enabled: !0 },
  browserStorage: "sessionStorage",
  delegate: {
    beforeDisplay: function (a, b) {
      return a && a.metadata && "echo" == a.metadata.type ? null : a;
    },
  },
}).then(
  function () {
    dataLayer.push({
      event: "Chat Loaded",
      eventAction: "Chat",
      eventCategory: "Main Interactions",
      eventLabel: "Loaded",
    });
    window.tracy
      ? window.tracy.invokeEvent("show", {
          element_name: "Smooch chatbot - loaded",
          section: "Smooch Chatbot",
        })
      : window.tcSendEvent &&
        window.tcSendEvent("show", {
          element_name: "Smooch chatbot - loaded",
          section: "Smooch Chatbot",
          consent_status: "undefined,undefined",
        });
    var a = document.querySelectorAll(".js-open-chat");
    a.forEach(function (b) {
      b.addEventListener("click", function (c) {
        c.preventDefault();
        document
          .getElementById("web-messenger-container")
          .contentWindow.document.getElementById("messenger-button")
          .click();
      });
    });
  },
  function (a) {},
);
Smooch.on("widget:opened", function () {
  dataLayer.push({
    event: "Chat Opened",
    eventAction: "Chat",
    eventCategory: "Main Interactions",
    eventLabel: "Opened",
  });
  window.tracy
    ? window.tracy.invokeEvent("click", {
        element_name: "Smooch chatbot - opened",
        section: "Smooch Chatbot",
      })
    : window.tcSendEvent &&
      window.tcSendEvent("click", {
        element_name: "Smooch chatbot - opened",
        section: "Smooch Chatbot",
        consent_status: "undefined,undefined",
      });
});
Smooch.on("widget:closed", function () {
  dataLayer.push({
    event: "Chat Closed",
    eventAction: "Chat",
    eventCategory: "Main Interactions",
    eventLabel: "Closed",
  });
  window.tracy
    ? window.tracy.invokeEvent("click", {
        element_name: "Smooch chatbot - closed",
        section: "Smooch Chatbot",
      })
    : window.tcSendEvent &&
      window.tcSendEvent("click", {
        element_name: "Smooch chatbot - closed",
        section: "Smooch Chatbot",
        consent_status: "undefined,undefined",
      });
});
