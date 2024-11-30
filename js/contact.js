$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value);
    }, "type the correct answer -_-");
		
		$('#success,#error').hide();

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: false,
                    minlength: 10
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: "your name must consist of at least 2 characters"
                },
                phone: {
                    required: "Please enter your phone no",
                    minlength: "your phone number must consist of at least 2 characters"
                },
                email: {
                    required: "Please enter your email"
                },
                subject: {
                    required: "please indicate a subject"
                },
                message: {
                    required: "write something",
                    minlength: ""
                }
            },
        
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 0.90, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 0.15, function() {
                            $('#error').fadeIn();
                        });
                    }
                })
            }
        })
    })
		
        $('#serviceForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                selectService: {
                    required: true,
                    minlength: 1
                }
            },
            messages: {
                name: {
                    required: "Write something",
                    minlength: "your name must consist of at least 2 characters"
                },
                phone: {
                    required: "Please enter your phone no",
                    minlength: "your phone number must consist of at least 2 characters"
                },
                email: {
                    required: "Please enter your email"
                },
                selectService: {
                    required: "Select one service"
                }
            },
            submitHandler: function (form) {
                $(form).ajaxSubmit({
                    type: "POST",
                    data: $(form).serialize(),
                    url: "service_request.php",
                    success: function () {
                        $('#serviceForm :input').attr('disabled', 'disabled');
                        $('#serviceForm').fadeTo("slow", 0.90, function () {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#success').fadeIn();
                        });
                    },
                    error: function () {
                        $('#serviceForm').fadeTo("slow", 0.15, function () {
                            $('#error').fadeIn();
                        });
                    }
                });
            }
        });

        function sendEmail() {
            const name = $('#name').val();
            const email = $('#email').val();
            const subject = $('#subject').val();
            const message = $('#message').val();

            const mailtoLink = `mailto:sales@mrgengineering.com.my?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;
            
            window.location.href = mailtoLink;
            $('#success').fadeIn();
        }
        
    })(jQuery);
});
