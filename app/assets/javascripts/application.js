// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require trix

function uploadAttachment(attachment) {

    var file = attachment.file;
    var form = new FormData;
    form.append("Content-Type", file.type);
    form.append("photo[image]", file);
  
    var xhr = new XMLHttpRequest;
    xhr.open("POST", "/photos.json", true);
    xhr.setRequestHeader("X-CSRF-Token", Rails.csrfToken());
  
    xhr.upload.onprogress = function(event) {
      var progress = event.loaded / event.total * 100;
      attachment.setUploadProgress(progress);
    }
  
    xhr.onload = function() {
      if (xhr.status === 201) {
        var data = JSON.parse(xhr.responseText);
        return attachment.setAttributes({
          url: data.image_url,
          href: data.url
        })
      }
    }
  
     return xhr.send(form);
  }
  
   // Listen for the Trix attachment event to trigger upload
  document.addEventListener("trix-attachment-add", function(event) {
    var attachment = event.attachment;
    if (attachment.file) {
      return uploadAttachment(attachment);
    }
  });
  
  addEventListener("trix-initialize", event => {
    const { toolbarElement } = event.target
    const blockTools = toolbarElement.querySelector("[data-trix-button-group=block-tools]")
    blockTools.insertAdjacentHTML("afterbegin", `
      <button type="button" class="trix-button" data-trix-action="x-horizontal-rule" title="Horizontal Rule" tabindex="-1">━</button>
    `)
  })
  
  addEventListener("trix-action-invoke", event => {
    if (event.actionName == "x-horizontal-rule") {
      const { editor } = event.target
      const attachment = new Trix.Attachment({ content: "<hr>", contentType: "application/vnd.trix.horizontal-rule.html" })
      editor.insertAttachment(attachment)
    }
  })
  
  addEventListener("trix-initialize", event => {
    const { toolbarElement } = event.target
    const blockTools = toolbarElement.querySelector("[data-trix-button-group=block-tools]")
    blockTools.insertAdjacentHTML("afterbegin", `
      <button type="button" class="trix-button" data-trix-action="code-highlight" title="Code Highligt" tabindex="-1">CH</button>
    `)
  })
  
  addEventListener("trix-action-invoke", event => {
    if (event.actionName == "code-highlight") {
      const { editor } = event.target
      const attachment = new Trix.Attachment({ content: "<hr>", contentType: "application/vnd.trix.code-highlight.html" })
      editor.insertAttachment(attachment)
    }
  })
  
  $(document).on('turbolinks:load', function(){
    let code = $('<code></code>');
    $("pre").wrapInner(code);
  });
  