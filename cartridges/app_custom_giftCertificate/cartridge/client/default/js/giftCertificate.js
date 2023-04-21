'use strict';


module.exports = {
    giftCertificateChecker: function () {
        $('giftCertificate-check-balance').on('click', function (e) {
            e.preventDefault();
            var url = $(this).data('url');
            var giftCertificateCode = ('#giftCertificate').val();
            $('#gift-certificate-form').spinner().start();
            $.ajax({
                url: url,
                type: 'POST',
                dataType: 'json',
                data: {
                    giftCertificateCode: giftCertificateCode
                },
                success: function (response) {
                    var message = response.message;
                    $('.giftCertificate-data-container').html(message);
                    $('#gift-certificate-form').spinner().stop();
                },
                error: function (error) {
                    $('#gift-certificate-form').spinner().stop();
                    var message = '<h1>' + error.message + '</h1>';
                    $('.giftCertificate-data-container').html(message);
                }
            });
        });
    },

    giftCertificateApplier: function () {
        $('#giftCertificate-form').on('click', function (e) {
            e.preventDefault();
            var url = $(this).data('url');
            var giftCertificateCode = ('#giftCertificate').val();
            $('#gift-certificate-form').spinner().start();
            $.ajax({
                url: url,
                type: 'POST',
                dataType: 'json',
                data: {
                    giftCertificateCode: giftCertificateCode
                },
                success: function (response) {
                    if (response.status != 1) {
                        var message = response.message;
                        $('.giftCertificate-data-container').html(message);
                        $('.giftCertificate-data-container').css('color', 'green');
                        $('a').removeAttr('style');
                    } else if (response.status == 1) {
                        var message = reponse.result;
                        $('.giftCertificate-data-container').html(message);
                        $('.giftCertificate-data-container').css('color', 'red');
                    } else {
                        var message = reponse.result;
                        $('.giftCertificate-data-container').html(message);
                        $('.giftCertificate-data-container').css('color', 'red');
                    }
                    if (response.flag) {
                        $('.cart-payment-options').addClass('d-none');
                        $('.payment-information').data('payment-method-id', 'GIFT_CERTIFICATE');
                    } else {
                        $('.cart-payment-options').removeClass('d-none');
                    }
                },
                error: function (error) {
                    $('#gift-certificate-form').spinner().stop();
                    var message = '<h1>' + error.message + '</h1>';
                    $('.giftCertificate-data-container').html(message);
                }

            });
        })
    },

    giftCertificateRemover: function () {
        $('.gift-cert-remove').on('click', function (e) {
            e.preventDefault();
            var url = $(this).data('url');
            var giftCertificateCode = ('#giftCertificate').val();
            $('#gift-certificate-form').spinner().start();
            $.ajax({
                url: url,
                type: 'POST',
                dataType: 'json',
                data: {
                    giftCertificateCode: giftCertificateCode
                },
                success: function (response) {
                    var message = response.message;
                    $('#gift-certificate-form').spinner().stop();
                    window.location.reload();
                }
            });
        });
    }
}