/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})

/* *********************** */
/* Character count pattern */
$(document).ready(function() {
    var text_max = 5000; // This the maximum character count
    var text_spread = 100; // This calculates when to change the text colour to red
    
    $('#character_count').html('Character count: 0 /' + text_max);
    $('#character_count_2').html('Character count: 0 /' + text_max);
    $('#character_count_3').html('Character count: 0 /' + text_max);
    $('#character_count_4').html('Character count: 0 /' + text_max);
    $('#character_count_7').html('Character count: 0 /' + text_max);
    $('#character_count_8').html('Character count: 0 /' + text_max);

    $('#mitigation').keyup(function() {
        var text_length = $('#mitigation').val().length;

        $('#character_count').html('Character count: ' + text_length + ' /' + text_max);
        
        if (text_length > (text_max-text_spread)) {
            $('#character_count').css('color','#B10E1E');
        } else {
            $('#character_count').css('color','#6F777B');
        }
        if (text_length > (text_max)) {
            $('#character_count').addClass('bold');
        } else {
            $('#character_count').removeClass('bold');
        }
    });

    $('#not-guilty-mitigation').keyup(function() {
        var text_length = $('#not-guilty-mitigation').val().length;

        $('#character_count').html('Character count: ' + text_length + ' /' + text_max);
        
        if (text_length > (text_max-text_spread)) {
            $('#character_count').css('color','#B10E1E');
        } else {
            $('#character_count').css('color','#6F777B');
        }
        if (text_length > (text_max)) {
            $('#character_count').addClass('bold');
        } else {
            $('#character_count').removeClass('bold');
        }
    });

    $('#witness-1-details').keyup(function() {
        var text_length = $('#witness-1-details').val().length;

        $('#character_count_2').html('Character count: ' + text_length + ' /' + text_max);
        
        if (text_length > (text_max-text_spread)) {
            $('#character_count_2').css('color','#B10E1E');
        } else {
            $('#character_count_2').css('color','#6F777B');
        }
        if (text_length > (text_max)) {
            $('#character_count_2').addClass('bold');
        } else {
            $('#character_count_2').removeClass('bold');
        }
    });

    $('#witness-2-details').keyup(function() {
        var text_length = $('#witness-2-details').val().length;

        $('#character_count_3').html('Character count: ' + text_length + ' /' + text_max);
        
        if (text_length > (text_max-text_spread)) {
            $('#character_count_3').css('color','#B10E1E');
        } else {
            $('#character_count_3').css('color','#6F777B');
        }
        if (text_length > (text_max)) {
            $('#character_count_3').addClass('bold');
        } else {
            $('#character_count_3').removeClass('bold');
        }
    });

    $('#dates-to-avoid-details').keyup(function() {
        var text_length = $('#dates-to-avoid-details').val().length;

        $('#character_count_4').html('Character count: ' + text_length + ' /' + text_max);
        
        if (text_length > (text_max-text_spread)) {
            $('#character_count_4').css('color','#B10E1E');
        } else {
            $('#character_count_4').css('color','#6F777B');
        }
        if (text_length > (text_max)) {
            $('#character_count_4').addClass('bold');
        } else {
            $('#character_count_4').removeClass('bold');
        }
    });

    $('#feedback-details').keyup(function() {
        var text_length = $('#feedback-details').val().length;

        $('#character_count_7').html('Character count: ' + text_length + ' /' + text_max);
        
        if (text_length > (text_max-text_spread)) {
            $('#character_count_7').css('color','#B10E1E');
        } else {
            $('#character_count_7').css('color','#6F777B');
        }
        if (text_length > (text_max)) {
            $('#character_count_7').addClass('bold');
        } else {
            $('#character_count_7').removeClass('bold');
        }
    });

    $('#other-income-details').keyup(function() {
        var text_length = $('#other-income-details').val().length;

        $('#character_count_8').html('Character count: ' + text_length + ' /' + text_max);
        
        if (text_length > (text_max-text_spread)) {
            $('#character_count_8').css('color','#B10E1E');
        } else {
            $('#character_count_8').css('color','#6F777B');
        }
        if (text_length > (text_max)) {
            $('#character_count_8').addClass('bold');
        } else {
            $('#character_count_8').removeClass('bold');
        }
    });

});