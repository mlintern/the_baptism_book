/*
 * jQuery Exit Button plugin 1.0.1
 *
 * Mark Lintern
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Date: August 20th, 2018
 */
jQuery.fn.exitButton = function (settings) {
    var options = jQuery.extend({
        top: '0',
        right: '0',
        fontSize: 'inherit'
    }, settings);

    $(this).each( function () {
        $(this).append('<span style="position:absolute; top: '+options.top+'; right: '+options.right+'; font-size: '+options.fontSize+';background-color: white; border-radius: 20px;" class="fa-stack exit"><i class="fa fa-circle-o fa-stack-2x"></i><i class="fa fa-close fa-stack-1x"></i></span>');
        $(this).find(".exit").click(function () {
            $(this).parent().hide();
        });
    });
};
