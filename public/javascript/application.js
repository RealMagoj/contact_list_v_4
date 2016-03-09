$(document).ready(function() {

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  $('.new').on('click', function() {
    $.ajax({
      type: 'post',
      url: '/contacts/new',
      dataType: 'json',
      data: {name: $('#name').val(), email: $('#email').val()},
      success: function(data){
        alert('Created new contact!')
      }
    });
  });

  $(".list").on('click', function(){
    $.ajax({
      type: 'get',
      url: '/contacts',
      dataType: 'json',
      success: function(data){
        $('.contact-list').html("");
        $.each(data, function(index, contact){
          $('.contact-list').append("<p>" + contact.name + ", " + contact.email + " <button class='delete' id='" + contact.id + "'>Delete</button></p>");
        });
      }
    });
  });

  $('.contact-list').on('click', '.delete', function(){
    var contact = $(this).attr('id');
    console.log(contact);
    $.ajax({
      type: 'delete',
      url: '/contacts/delete',
      data: { id: contact },
      success: function() {
        $('#' + contact).parent().remove();
      }
    });
  });

  $('.show').on('click', function() {
    $.ajax({
      type: 'get',
      url: '/contacts/show/' + $('#id').val(),
      dataType: 'json',
      success: function(data){
        console.log(data)
        $('.contact-list').empty();
        $('.contact-list').append("<p>" + data.name + ", " + data.email + " <button class='delete' id='" + data.id + "'>Delete</button></p>");
      }
    });
  });

});