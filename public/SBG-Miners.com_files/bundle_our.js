function Settings(){}

Settings.init = function(prefShortSymbol) {
    Settings.prefShortSymbol = prefShortSymbol;
}

var coin_search_options = {
    source: [],
    autoSelect: true,
    afterSelect: function(item) {
        Generic.blockUI();
        if (item.symbol != '') {
            s = item.name.substr(0, item.name.indexOf('(') - 1); // no symbol
            top.location.href = '/coin/' + item.symbol + '/' + s.replace(/ /g, '+');
        } else {
            top.location.href = '/exchange/' + item.name.toLowerCase();
        }
    },
    highlighter: function(item) {return item;},
    sorter: function(items) {
        var symbolBegins = [];
        var nameBegins = [];
        var contains = [];
        var query = this.query.toLowerCase();
        var item;

        while ((item = items.shift())) {
            var symbol = item.symbol.toLowerCase();
            var name = item.name.toLowerCase();
            if (symbol.indexOf(query) == 0) {
                symbolBegins.push(item);
            } else if (name.indexOf(query) == 0) {
                nameBegins.push(item);
            } else {
                contains.push(item);
            }
        }

        return symbolBegins.concat(nameBegins, contains);
    }
}

function Selector_Cache() {
    var collection = {};

    function get_from_cache( selector ) {
        if ( undefined === collection[ selector ] ) {
            collection[ selector ] = $( selector );
        }

        return collection[ selector ];
    }

    function invalidate() {
        collection = {};
    }

    return { get: get_from_cache, invalidate: invalidate };
}

var Generic = function() {

    var handlePrefCoin = function() {
        $('#pref_coin_id').change(function() {
            $('#pref_coin_id').attr('disabled', 'disabled');
            Generic.blockUI();
            $.ajax({
                type: 'POST',
                url: '/pref_coin_save',
                data: 'pref_coin_id=' + $(this).val(),
                dataType: 'json'
            }).done(function(data) {
                location.reload(true);
            }).fail(function($xhr) {
                Generic.unblockUI();
                $('#pref_coin_id').removeAttr('disabled');
                var data = $xhr.responseJSON;
                alertErr('.page-header', data.error);
            });
        });
    };

    var handleLights = function() {
        $('.lights').click(function() {
            var theme = '';
            if ($('body').hasClass('dark')) {
                theme = 'light';
                $('body').removeClass('dark')
            } else {
                theme = 'dark';
                $('body').addClass('dark')
            }
            $.ajax({
                type: 'POST',
                url: '/stars',
                data: 'theme=' + theme,
                dataType: 'json'
            });
        });
    };


    var handleStars = function() {
        $('body').on('click', '.star-add', function() {
            var classes = $(this).attr('class').split(' ');
            var coin_id = 0;
            for (var i = 0; i < classes.length; i++) {
                if (classes[i].match(/star-\d+/)) {
                    coin_id = classes[i].substring(5);
                    break;
                }
            }
            if (coin_id > 0) {
                Generic.add_star(coin_id);
            }
        });

        $('body').on('click', '.star-del', function() {
            classes = $(this).attr('class').split(' ');
            var coin_id = 0;
            for (var i = 0; i < classes.length; i++) {
                if (classes[i].match(/star-\d+/)) {
                    coin_id = classes[i].substring(5);
                    break;
                }
            }
            if (coin_id == 0) {
                return false;
            }
            var sel = '.star-' + coin_id;

            $(sel).removeClass('fa-star starred star-del');
            $(sel).addClass('fa-spin fa-spinner');

            $.ajax({
                type: 'POST',
                url: '/stars',
                data: 'del=' + coin_id,
                dataType: 'json'
            }).done(function(data) {
                $(sel).removeClass('fas fa-spin fa-spinner');
                $(sel).addClass('fal fa-star unstarred star-add');
                var tab = $('ul.nav.nav-tabs a.active').attr('href').substr(1);
                if (tab == 'starred') {
                    $('#starred').load(i18n.normalizeURL('/home_tab_load?tab=starred'), function() {
                        setTimeout(drawSmallCharts, 100); // make sure small charts are drawn later
                    });
                }
            }).fail(function($xhr) {
                $(sel).removeClass('fa-spin fa-spinner');
                $(sel).addClass('fa-star starred star-del');
            });
        });
    };

    var handleCoinList = function() {
        $('body').on('click', '.clickable-coin-td', function(e) {
            // if middle click, or control/command is pressed exit so we can open links in background tab
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf('MSIE') > 0;
            if (e.ctrlKey || e.metaKey || (!msie && e.button == 1) || (msie && e.button == 4)) {
                return;
            }

            var tr = $(this).parent('tr');
            if (window.self !== window.top) {
                var r = document.referrer.split('/');
                var source = 'unknown';
                if (r.length >= 3) {
                    var source = escape(r[2]);
                }
                window.top.location.href = tr.attr('coin_url') + '?utm_source=' + source + '&utm_medium=clwidget&utm_campaign=unknown';
            } else {
                window.location.href = tr.attr('coin_url');
            }
            tr.addClass('highlighted');
        });
    };

    var increaseVisitCounter = function() {
        if (Generic.jsCookies.hasItem('RVCW')) {
            rvcw = parseInt(Generic.jsCookies.getItem('RVCW'));
        } else {
            rvcw = 0;
        }
        now = Math.floor((new Date).getTime() / 1000);
        if (now > rvcw + 3600) {
            if (Generic.jsCookies.hasItem('RVC')) {
                rvc = parseInt(Generic.jsCookies.getItem('RVC'));
            } else {
                rvc = 0;
            }
            Generic.jsCookies.setItem('RVC', rvc + 1, Infinity, '/');
        }
        Generic.jsCookies.setItem('RVCW', now, Infinity, '/');
    };

    return {
        jsCookies: {
            getItem: function(sKey) {
                return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
            },
            setItem: function(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
                if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
                var sExpires = "";
                if (vEnd) {
                    switch (vEnd.constructor) {
                    case Number:
                        sExpires = vEnd === Infinity ? "; expires=Wed, 31 Dec 2031 15:00:00 GMT" : "; max-age=" + vEnd;
                        break;
                    case String:
                        sExpires = "; expires=" + vEnd;
                        break;
                    case Date:
                        sExpires = "; expires=" + vEnd.toUTCString();
                        break;
                    }
                }
                document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
                return true;
            },

            removeItem: function(sKey, sPath, sDomain) {
                if (!sKey || !this.hasItem(sKey)) { return false; }
                document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( sDomain ? "; domain=" + sDomain : "") + ( sPath ? "; path=" + sPath : "");
                return true;
            },
            hasItem: function(sKey) {
                return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
            }
        },

        showGenericMsg: function(title, body) {
            $('#generic-msg-title').html(title);
            $('#generic-msg-body').html(body);
            $('#modal_generic .modal-content').hide();
            $('#generic-msg-container').show();
            $('#modal_generic').modal('show');
        },

        init: function() {
            // handlePrefCoin();
            // handleLights();
            // handleStars();
            handleCoinList();
            increaseVisitCounter();

            // // init quick search
            // $.get('/searchable_items_json?v=' + searchable_items_version, 'json', function(data) {
            //     coin_search_options.source = data;
            //     $('#top_search').typeahead(coin_search_options);

            //     // also take care of starred quick search
            //     // NOTE: this will alter coin_search_options
            //     if (typeof Homepage !== 'undefined') {
            //         Homepage.handleStarredSearch();
            //     }
            // });
            this.selector = new Selector_Cache();

            // $('.selectpicker').on('loaded.bs.select', function(e) {
            //     // make searchcoin visible
            //     $('#top_search').css('visibility', 'visible');
            // });
        },

        initNotifications: function(id) {
            if (Generic.jsCookies.hasItem('VC')) {
                vc = parseInt(Generic.jsCookies.getItem('VC'));
            } else {
                vc = 0;
            }
            if (vc < id) {
                // we have new notifs
                $('.notifications a span').addClass('indicator');
            }
            $('.notifications a').click(function() {
                Generic.jsCookies.setItem('VC', id, Infinity, '/');
                $('.notifications a span').removeClass('indicator');
            });
        },

        add_star: function(coin_id) {
            var sel = '.star-' + coin_id;
            $(sel).removeClass('fal fa-star star-add unstarred');
            $(sel).addClass('fas fa-spin fa-spinner');
            $.ajax({
                type: 'POST',
                url: '/stars',
                data: 'add=' + coin_id,
                dataType: 'json'
            }).done(function(data) {
                $(sel).removeClass('fa-spin fa-spinner');
                $(sel).addClass('fa-star starred star-del');
                var tab = $('ul.nav.nav-tabs a.active').attr('href').substr(1);
                if (tab == 'starred') {
                    $('#starred').load(i18n.normalizeURL('/home_tab_load?tab=starred'), function() {
                        $('#starred_search').focus();
                        setTimeout(drawSmallCharts, 100); // make sure small charts are drawn later
                    });
                }
            }).fail(function($xhr) {
                $(sel).removeClass('fas fa-spin fa-spinner');
                $(sel).addClass('fal fa-star star-add unstarred');
            });
        },

        blockUI: function(target) {
            var options = {
                message: '<i class="fal fa-spin fa-sync" style="font-size:20px; margin-top: 25px;"></i>',
                css: {
                        border: '1px solid gray',
                        padding: '10px 10px',
                        backgroundColor: '#fff',
                        width: '100px',
                        height: '100px'
                },
                overlayCSS: {
                        backgroundColor: '#555',
                        opacity: 0.5,
                        cursor: 'wait'
                }
            }
            if (target) {
                var el = $(target);
                el.block(options);
            } else {
                $.blockUI(options);
            }
        },

        unblockUI: function(target) {
            if (target) {
                $(target).unblock();
            } else {
                $.unblockUI();
            }
        },

        csrfAjax: function() {
            $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
                if (originalOptions.type !== 'POST') {
                    return;
                }
                if (typeof originalOptions.data === 'string' || originalOptions.data instanceof String) {
                    var csrf = 'csrf_token=' + window.csrf['csrf_token'];
                    if (options.data.length > 0) {
                        options.data += '&' + csrf;
                    } else {
                        options.data = csrf;
                    }
                } else {
                    options.data = $.extend(originalOptions.data, window.csrf);
                    options.data = $.param(options.data);
                }
            });
        },

        checkCoinlibShare: function() {
            if (Generic.jsCookies.hasItem('RVC')) {
                rvc = parseInt(Generic.jsCookies.getItem('RVC'));
                var showit = false;
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    if (rvc == 40) {
                        showit = true;
                    }
                } else {
                    if (rvc == 10) {
                        showit = true;
                    }
                }
                if (showit) {
                    Generic.jsCookies.setItem('RVC', rvc + 1, Infinity, '/');  // make sure we won't show it again on refresh
                    Generic.showCoinlibShare();
                }
            }
        },

        showCoinlibShare: function() {
            $('#coinlib-needs-your-help').modal('show');
            $('#coinlib-needs-your-help-social').append('<script src="/static/js/lib/twitter-widgets.js"></script>');
            $('#coinlib-needs-your-help-social').append("<script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=141127902677496&autoLogAppEvents=1';fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));</script>");
            $('#coinlib-needs-your-help-social').append('<div class="fb-share-button float-left ml-2" style="margin-top: -1px;" data-href="https://coinlib.io" data-layout="button" data-size="small" data-mobile-iframe="false"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcoinlib.io%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>');
        },

    };

}();



/* Helpers */

function alertMsg(selector, msg) {
    clearCustomMessage(alertMsg.id);

    alertMsg.id = setTimeout(function() {
        clearCustomMessage(alertMsg.id);
        alertMsg.id = null;
    }, 7000);

    $(selector).append('<div id="custom_msg_' + alertMsg.id + '" class="alert alert-success mt-3 custom_msg" role="alert">' + msg + '</div>');
}

function alertErr(selector, msg) {
    clearCustomMessage(alertErr.id);

    alertErr.id = setTimeout(function() {
        clearCustomMessage(alertErr.id);
        alertErr.id = null;
    }, 7000);

    $(selector).append('<div id="custom_msg_' + alertErr.id + '" class="alert alert-danger mt-3 custom_msg" role="alert">' + msg + '</div>');
}

function clearCustomMessage(alertId) {
    if (alertId != null) {
        $('#custom_msg_' + alertId).remove();
        clearTimeout(alertId);
    }
}

function drawSmallCharts(skip_invisible) {
    skip_invisible = defaultFor(skip_invisible, false);
    var options = {
        chart: {
            type: 'area',
            backgroundColor: undefined,
            spacing: [0, 0, 0, 0], // otherwise it won't align nicely with text above it (home page - mobile)
        },
        plotOptions: {
            area: {
                lineWidth: 1,
                marker: {enabled: false},
                animation: false,
                dataGrouping: {
                    enabled: true,
                },
            }
        },
        tooltip: {
            useHTML: true,
            formatter: function() {
                return Highcharts.dateFormat('%e %b %Y', this.x) + '<br>' + htmlDecode(Settings.prefShortSymbol) + format_price(this.point.y);
            },
            borderWidth: 1,
            padding: 2,
            valueDecimals: 2,
            hideDelay: 100,
        },
        credits: false,
        xAxis: {
            visible: false,
            type: 'datetime'
        },
        yAxis: [{visible: false,
                 alignTicks: false,
                 startOnTick: false,
                 endOnTick: false}],
        title: {text: undefined},
        legend: false,
    };

    var first = true;  // hack

    $('.small-chart').each(function() {
        if (skip_invisible && !$(this).is(':visible')) {
            return;
        }
        var opt = clone(options); // make a deep copy
        var data = $(this).attr('values').split(',').map(Number);

        opt.plotOptions.series = {
            pointStart: parseInt($(this).attr('date-start')) * 1000,
            pointInterval: parseInt($(this).attr('point-interval')),
        };
        if ($(this).width() < 120) {
            opt.tooltip.enabled = false;
            opt.plotOptions.series.states = {hover: {enabled : false}};
        }
        if ($(this).attr('numberooltip') == '1') {
            opt.tooltip.formatter =
                function() {
                    return Highcharts.dateFormat('%e %b %Y', this.x) + '<br>' + format_price(this.point.y);
                };
        } else if (parseInt($(this).attr('point-interval')) <= 60*1000) {
            opt.tooltip.formatter =
                function() {
                    return Highcharts.dateFormat('%e %b %H:%M', this.x) + '<br>' + htmlDecode(Settings.prefShortSymbol) + format_price(this.point.y);
                };
        } else if (parseInt($(this).attr('point-interval')) < 24*60*60*1000) {
            opt.tooltip.formatter =
                function() {
                    return Highcharts.dateFormat('%e %b %H:00', this.x) + '<br>' + htmlDecode(Settings.prefShortSymbol) + format_price(this.point.y);
                };
        }
        opt.series = [{
            data: data,
            fillOpacity: 0.15,
            marker: {
                enabled: false
            },
            color: '#2ecc71',
            negativeColor: '#e74c3c',
            threshold: $(this).attr('threshold') == undefined ? data[0] : parseFloat($(this).attr('threshold'))
        }];
        opt.yAxis.plotLines = [
            { color: '#888888',
              width: 1,
              value: data[0]
            }
        ];
        var ch = new Highcharts.Chart(this, opt);

        // Removing this makes the 1st chart in homepage smaller some times :/
        if (first) {
            ch.reflow();
            first = false;
        }
    });
    $('.small-live-chart').each(function() {
        var t = this;

        var interval = 10 * 60000;  // 10 minutes
        if (parseInt($(this).attr('point-interval')) <= 60000) {
            interval = 3 * 60000;  // 3 minutes if hourly
        }

        setTimeout(function() {
            setInterval(function() { update_chart(t) }, interval);
        }, Math.round(30000 + Math.random() * 30000));
    });
}
function async_update_small_charts() {
    // called when socket reconnects to refresh small live charts
    const updatePromises = [];

    $('.small-live-chart').each(function() {
        updatePromises.push(async_update_chart(this));
    });

    Promise.all(updatePromises).then(() => {
        console.log('All charts updated');
    });
}

function async_update_chart(chart) {
    return new Promise((resolve, reject) => {
        if (!$(chart).is(':visible')) {
            resolve();
            return;
        }
        $.ajax({
            type: 'GET',
            url: '/api/sc',
            data: 'fsym=' + $(chart).attr('fsym') + '&tsym=' + $(chart).attr('tsym') + '&days=' + $(chart).attr('days'),
            dataType: 'json'
        }).done(function(data) {
            var hc = $(chart).highcharts();
            if (!hc) {
                resolve();
                return;
            }
            data['data'] = data['data'].map(Number);
            hc.series[0].update({
                data: data['data'],
                threshold: data['data'][0],
                pointStart: new Date(data['date_start']).getTime()
            }, false);
            hc.yAxis[0].setExtremes(Math.min.apply(null, data['data']), Math.max.apply(null, data['data']), false);
            hc.redraw();  // only redraw once, the above functions better have redraw=false
            resolve();
        }).fail(function() {
            reject();
        });
    });
}
function update_small_charts() {
    // called when socket reconnects to refresh small live charts
    var i = 0;
    $('.small-live-chart').each(function() {
        var t = this;
        setTimeout(function() { update_chart(t); }, i * 1000); // max 1 update / sec
        i++;
    });
}

function update_chart(chart) {
    if (!$(chart).is(':visible')) {
        return;
    }
    $.ajax({
        type: 'GET',
        url: '/api/sc',
        data: 'fsym=' + $(chart).attr('fsym') + '&tsym=' + $(chart).attr('tsym') + '&days=' + $(chart).attr('days'),
        dataType: 'json'
    }).done(function(data) {
        var hc = $(chart).highcharts();
        if (!hc) {
            return;
        }
        data['data'] = data['data'].map(Number);
        hc.series[0].update({
            data: data['data'],
            threshold: data['data'][0],
            pointStart: new Date(data['date_start']).getTime()
        }, false);
        hc.yAxis[0].setExtremes(Math.min.apply(null, data['data']), Math.max.apply(null, data['data']), false);
        hc.redraw();  // only redraw once, the above functions better have redraw=false
    });
}

function update_value(element, new_value, colored, bolded) {
    var cl = '';
    var font_classes = '';
    var old_value = element.html();

    // we do this always to make sure new_value is HTML encoded ie euro symbol to &euro;, same spaces etc
    element.html(new_value);
    new_value = element.html();
    if (old_value) {
        old_value = old_value.replace(/&nbsp;/g, ' ');
    }
    if (new_value) {
        new_value = new_value.replace(/&nbsp;/g, ' ');
    }

    if (new_value != old_value) {
        element.html(new_value);
        if (old_value == '') return;
        var dimmed = element.hasClass('dimmed');
        if (new_value > old_value) {
            if (colored) {
                cl = 'up ';
                element.removeClass('dimmed');
            }
            if (bolded) cl += 'sbold ';
            if (bolded || colored) element.addClass(cl);
        } else if (new_value < old_value) {
            if (colored) {
                cl = 'down ';
                element.removeClass('dimmed');
            }
            if (bolded) cl += 'sbold ';
            if (bolded || colored) element.addClass(cl);
        }
        if (bolded || colored) setTimeout(function () { element.removeClass('up down sbold'); if (dimmed) element.addClass('dimmed'); }, 1500);
    }
}

function format_large_number(number, high_accuracy) {
    high_accuracy = defaultFor(high_accuracy, false);
    if (!$.isNumeric(number)) {
        return '0';
    }
    if (number <= 10000) {
        if (!high_accuracy) {
            return number.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').replace(/\..*/g, '');
        } else {
            return format_price(number);
        }
    }
    if (number >= 1000000000000) {
        return (Math.round(number / 10000000000.0) / 100.0).toFixed(2) + '&nbsp;T';
    }
    if (number >= 1000000000) {
        return (Math.round(number / 10000000.0) / 100.0).toFixed(2) + '&nbsp;B';
    }
    if (number >= 1000000) {
        return (Math.round(number / 10000.0) / 100.0).toFixed(2) + '&nbsp;M';
    }
    if (number >= 10000) {
        return (Math.round(number / 10.0) / 100.0).toFixed(0) + 'K';
    }
}

function format_price(price, no_commas, extra_precision, no_decimals_after) {
    no_commas = defaultFor(no_commas, false);
    no_decimals_after = defaultFor(no_decimals_after, 100000);
    extra_precision = defaultFor(extra_precision, 0);
    if (!price) {
        return '0';
    }
    if (price < 0) {
        return '-' + format_price(-price, no_commas);
    }
    price = parseFloat(price);
    if (price > -1 && price < 1) {
        d = Math.ceil(-Math.log10(Math.abs(price)) + 2)
        if (d >= 5) d = 8;  // if < 0.001 show 8 decimals
        decimals = (price % 1).toFixed(15);
        r = decimals.substring(0, d + 2 + extra_precision);
        if (extra_precision > 0) {
            return r.replace(/0+$/, '');
        }
        return r;
    }
    if (price > -10 && price < 10) {
        return price.toFixed(3);
    }
    if (price > no_decimals_after) {
        r = price.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').replace(/\..*/g, '');
    } else {
        r = price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
    if (no_commas) {
        r = r.replace(/,/g, '');
    }
    return r;
}

// This price is used in form fields (ie portfolio).
/*
    var tests = [
        [999.999998, "1000"],
        [999.99999, "999.99999"],
        [0.100000008, "0.100000008"],
        [0.100000001, "0.100000001"],
        [1.100000001, "1.1"],
        [0.1000000008, "0.1"],
        [1234.50002, "1234.50002"],
        [1234.500009, "1234.500009"],
        [1234567.50301, "1234567.503"],
        [1234567.50309, "1234567.5031"],
        [0.00000001, "0.00000001"],
        [0.000000001, "0.000000001"],
        [10.3729999999999, "10.373"],
        [0.99999999, "0.99999999"],
        [0.999999998, "1"],
        [110.99999999, "111"],
        [110.49999999, "110.5"],
    ];
    for (t of tests) {
        if (format_price_exact(t[0]) != t[1])
            console.log(t[0], t[1], format_price_exact(t[0]));
    }
*/
function format_price_exact(price) {
    if (!$.isNumeric(price)) {
        return 0;
    }
    price = parseFloat(price);
    if (price < 0) {
        return '-' + format_price_exact(-price);
    }

    whole_digits = price < 1 ? 0 : Math.floor(price).toString().length;
    fixed = price.toFixed(Math.max(8 - whole_digits, 4));  // round to up to 8 digits
    fixed = fixed.replace(/0+$/, '').replace(/\.$/, ''); // remove trailing zeroes

    d = (parseFloat(fixed) / price).toFixed(8);
    if (parseFloat(d) == 1) {
        return fixed;
    }

    if (price.toString().indexOf('e') == -1) {
        r = price.toString();
    } else {
        r = price.toFixed(20);
    }
    r = r.substring(0, whole_digits + 1 + 10); // 1 for the . and up to 10 precision
    r = r.replace(/0+$/, '').replace(/\.$/, ''); // remove trailing zeroes
    return r;
}

function filter_pie_data(data, pct_threshold) {
    pct_threshold = defaultFor(pct_threshold, 4);
    data.sort(function(a, b) { return b[1] - a[1]; });
    var sum = 0;
    for (var ix = 0; ix < data.length; ++ix) {
        sum += data[ix][1];
    }
    var filtered_data = [];
    var other = 0;
    for (var ix = 0; ix < data.length; ++ix) {
        if (data[ix][1] * 100.0 / sum < pct_threshold) {
            other += data[ix][1];
        } else {
            filtered_data.push(data[ix]);
        }
    }
    if (other > 0) {
        filtered_data.push(['Other', other]);
    }
    return filtered_data;
}

function htmlDecode(value) {
    return $('<textarea/>').html(value).text();
}

function htmlEncode(value) {
    return $('<textarea/>').text(value).html();
}

function get_pie_chart(container, data, prefShortSymbol) {
    Highcharts.chart(container, {
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    chart: {
                        spacing: [10,0,10,0]
                    },
                }
            }]
        },
        chart: {
            type: 'pie',
            backgroundColor: undefined,
        },
        credits: { enabled: false },
        title: {
            text: ''
        },
        tooltip: {
            useHTML: true,
            formatter: function() {
                return this.point.name + ': <b>' + htmlDecode(prefShortSymbol) + ' ' + format_large_number(this.point.y) + ' (' + (Math.round(this.point.percentage*10)/10) + '%)</b>';
            }
        },
        plotOptions: {
            pie: {
                minSize: 400,
                innerSize: 100,
                dataLabels: {
                    enabled: true,
                    distance: -40,
                    style: {
                        fontSize: '12px',
                        fontWeight: 'regular',
                        color: 'white',
                        textOutline: 0,
                    }
                },
            }
        },
        series: [{
            name: _t('Volume'),
            data: data
        }]
    });
}

function get_short_symbol(coin_id) {
    return window.ALL_COINS_ != undefined ? window.ALL_COINS_[coin_id] : '';
}

function defaultFor(arg, val) {
    return typeof arg !== 'undefined' ? arg : val;
}

// useless IE <=11
Math.log10 = Math.log10 || function(x) {
  return Math.log(x) * Math.LOG10E;
};

// return a deep copy of an item
function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || 'object' != typeof obj) {
        return obj;
    }

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = clone(obj[attr]);
            }
        }
        return copy;
    }

    throw new Error('Unable to copy obj! Its type is not supported.');
}

function get_timestamp() {
    if (!Date.now) {
        Date.now = function() { return new Date().getTime(); }
    }
    return Math.floor(Date.now() / 1000);
}

function get_percent(a, b, decimals, formatted, delta) {
    decimals = defaultFor(decimals, 2);
    formatted = defaultFor(formatted, false);
    delta = defaultFor(delta, true);
    if (b != 0) {
        p = (delta ? (parseFloat(a) - parseFloat(b)) : parseFloat(a)) * 100.0 / parseFloat(b);
        p = p.toFixed(decimals);
        if (parseFloat(p) == 0) {
            p = 0;
            p = p.toFixed(decimals);
        }
        if (formatted && p > 0) p = '+' + p;
        return p;
    }
    return 0;
}

function updateGraphCustomLabels(label, chart, prefShortSymbol, suffix, format_fn) {
    suffix = defaultFor(suffix, '');
    format_fn = defaultFor(format_fn, format_price);
    var last = undefined;
    var first = undefined;
    for (var ix = chart.series[0].points.length - 1; ix >= 0; ix--) {
        if (chart.series[0].points[ix] != undefined) {
            last = chart.series[0].points[ix].y;
            break;
        }
    }
    for (var ix = 0; ix < chart.series[0].points.length; ix++) {
        if (chart.series[0].points[ix] != undefined) {
            first = chart.series[0].points[ix].y;
            break;
        }
    }
    var pcnt = get_percent(last, first, 2, true);
    var low = Number.MAX_SAFE_INTEGER, high = 0;
    for (ix = 0; ix < chart.series[0].points.length; ix++) {
        if (chart.series[0].points[ix] != undefined) {
            var cur = chart.series[0].points[ix].y;
            low = Math.min(low, cur);
            high = Math.max(high, cur);
        }
    }
    var totalvolume = 0;
    for (var six = 0; six < chart.series.length; six++) {
        if (chart.series[six].options.id == 'mainvolume') {
            for (ix = 0; ix < chart.series[six].points.length; ix++) {
                if (chart.series[six].points[ix] != undefined) {
                    totalvolume += chart.series[six].points[ix].y;
                }
            }
        }
    }

    label.attr({
        text: '<div>&nbsp;<b>D</b>:<span style="color:#' + (pcnt > 0 ? '68db73' : 'ee5630') + ';">' + pcnt + '% &nbsp;</span><b>L/H</b>:' + format_fn(low) + suffix + ' / ' + format_fn(high) + suffix +
            ((totalvolume > 0) ?
            (' &nbsp;<b>V</b>:' + prefShortSymbol + format_large_number(totalvolume) + suffix) : '') +
            '</div>'});
}

function SocketInterface() {}

SocketInterface.init = function(hostport, initial_subscriptions, initial_handlers, log_outsize_after_mins, reconnect_attempts) {
    log_outsize_after_mins = defaultFor(log_outsize_after_mins, 0);
    reconnect_attempts = defaultFor(reconnect_attempts, Infinity);
    initial_subscriptions = defaultFor(
        initial_subscriptions, {'trades': {}, 'avgprice': {}, 'mktcap': {}});
    initial_handlers = defaultFor(
        initial_handlers, {'trades': {}, 'avgprice': {}, 'mktcap': {}});

    SocketInterface.hostport = hostport;
    SocketInterface.subscriptions = initial_subscriptions;
    SocketInterface.handlers = initial_handlers;
    SocketInterface.disconnect_time = 0;
    SocketInterface.connects = 0;
    SocketInterface.disconnect_time = get_timestamp();
    SocketInterface.log_outsize_after_mins = log_outsize_after_mins;
    if (SocketInterface.log_outsize_after_mins) {
        setTimeout(
            function() {
                console.log('Total streamed bytes within the first ' + SocketInterface.log_outsize_after_mins +
                            ' minutes: ' + SocketInterface.total_bytes);
            }, 60000 * SocketInterface.log_outsize_after_mins);
    }
    SocketInterface.total_bytes = 0;
    SocketInterface.on_reconnect_handler = function() {
        update_small_charts();
    }
}

SocketInterface.reset = function(subs, handlers) {
    SocketInterface.subscriptions = subs;
    SocketInterface.handlers = handlers;
    SocketInterface.send_subscriptions();
}

function getParentSiteUrl() {
    const referrerUrl = document.referrer;
    if (referrerUrl === "") {
      return window.location.hostname;
    }
    const url = new URL(referrerUrl);
    return url.hostname;
  }
  

SocketInterface.connect = function () {
    SocketInterface.socket = io.connect(SocketInterface.hostport, {
        transports: ['websocket'],
        reconnection: true, reconnectionDelay: 1000,
        reconnectionDelayMax : 3000,
        reconnectionAttempts: Infinity,
        query: {
            refref: getParentSiteUrl()
          }
    });
    SocketInterface.socket.on('trades', function(data) {
        SocketInterface.handle_trade(data);
    });
    SocketInterface.socket.on('multi_trades', function(dataarray) {
        for (var i = 0; i < dataarray.length; i++) {
            SocketInterface.handle_trade(dataarray[i]);
        }
    });
    SocketInterface.socket.on('avgprice', function(data) {
        SocketInterface.handle_avgprice(data);
    });
    SocketInterface.socket.on('multi_avgprice', function(dataarray) {
        for (var i = 0; i < dataarray.length; i++) {
            SocketInterface.handle_avgprice(dataarray[i]);
        }
    });
    SocketInterface.socket.on('mktcap', function(data) {
        SocketInterface.handle_mktcap(data);
    });
    SocketInterface.socket.on('connect', function() {
        SocketInterface.connects++;
        if (SocketInterface.connects == 1) {
            SocketInterface.heartbeat(1);
        } else {
            SocketInterface.heartbeat(3);
        }
        if (SocketInterface.connects > 1 && get_timestamp() - SocketInterface.disconnect_time > 120) {
            // only do this if it's a reconnect and we've been disconnected for more than 2 minutes
            SocketInterface.send_subscriptions_sync();
            if (SocketInterface.on_reconnect_handler) SocketInterface.on_reconnect_handler();
        }
        SocketInterface.send_subscriptions();
    });
    SocketInterface.socket.on('disconnect', function () {
        SocketInterface.disconnect_time = get_timestamp();
    });
}

SocketInterface.send_subscriptions_sync = function() {
    $.ajax({
        type: 'POST',
        url: '/api/streams',
        data: 'req=' + JSON.stringify(SocketInterface.subscriptions),
        dataType: 'json'
    }).done(function(data) {
        for (var rtype in data) {
            for (var ix in data[rtype]) {
                row = data[rtype][ix];
                if (rtype == 'trade') {
                    SocketInterface.handle_trade(row);
                } else if (rtype == 'avgprice') {
                    SocketInterface.handle_avgprice(row);
                } else if (rtype == 'mktcap') {
                    SocketInterface.handle_mktcap(row);
                }
            }
        }
    });
}

SocketInterface.get_signature = function (subs) {
    var signature = 0
    var salt = 8263
    for (var iy in subs) {
        var v = subs[iy];
        for (var ix = 1; ix < v.length; ix++) {
            signature += (parseInt(v[ix]) * salt) % 1000000;
        }
    }
    return signature;
}

// subs = array of [from_coin_id, to_coin_id, exchange_id, force_real_pair, pref_coin_id]
SocketInterface.add_trade_subscriptions = function(subs) {
    multi = [];
    for (var ix in subs) {
        var s = subs[ix]
        sub_str = "[" + s[0] + "," + s[1] + "," + s[2] + "," + s[3] + "," + s[4] + "]";
        SocketInterface.subscriptions['trades'][sub_str] = 0;
        multi.push(['trades', s[0], s[1], s[2], s[3], s[4]]);
    }
    SocketInterface.socket.emit('multi_subscribe', multi, SocketInterface.get_signature(multi));
}

SocketInterface.add_trade_subscription = function(
    from_coin_id, to_coin_id, exchange_id, force_real_pair, pref_coin_id) {
    sub = "[" + from_coin_id + "," + to_coin_id + "," + exchange_id +
        "," + force_real_pair + "," + pref_coin_id + "]";
    SocketInterface.subscriptions['trades'][sub] = 0;
    multi = [["trades", from_coin_id, to_coin_id, exchange_id, force_real_pair, pref_coin_id]];
    SocketInterface.socket.emit(
        'multi_subscribe', multi, SocketInterface.get_signature(multi));
}

SocketInterface.add_avgprice_subscription = function (
    from_coin_id, to_coin_id, pref_coin_id) {
    sub = "[" + from_coin_id + "," + to_coin_id + "," + pref_coin_id + "]";
    SocketInterface.subscriptions['avgprice'][sub] = 0;
    multi = [["avgprice", from_coin_id, to_coin_id, pref_coin_id]];
    SocketInterface.socket.emit(
        'multi_subscribe', multi, SocketInterface.get_signature(multi))
}

SocketInterface.add_mktcap_subscription = function (pref_coin_id) {
    sub = "["+ pref_coin_id + "]";
    SocketInterface.subscriptions['mktcap'][sub] = 0;
    multi = [["mktcap", pref_coin_id]];
    SocketInterface.socket.emit(
        'multi_subscribe', multi, SocketInterface.get_signature(multi));
}

SocketInterface.add_trade_handler = function(
    from_coin_id, to_coin_id, exchange_id, callback) {
    sub = "[" + from_coin_id + "," + to_coin_id + "," + exchange_id + "]";
    if (SocketInterface.handlers['trades'][sub] == undefined) {
        SocketInterface.handlers['trades'][sub] = [];
    }
    SocketInterface.handlers['trades'][sub].push(callback);
}

SocketInterface.add_avgprice_handler = function (from_coin_id, to_coin_id, callback) {
    sub = "[" + from_coin_id + "," + to_coin_id + "]";
    if (SocketInterface.handlers['avgprice'][sub] == undefined) {
        SocketInterface.handlers['avgprice'][sub] = [];
    }
    SocketInterface.handlers['avgprice'][sub].push(callback);
}

SocketInterface.add_raw_trade_handler = function (callback) {
    if (SocketInterface.handlers['trades']['raw'] == undefined) {
        SocketInterface.handlers['trades']['raw'] = [];
    }
    SocketInterface.handlers['trades']['raw'].push(callback);
}

SocketInterface.add_raw_avgprice_handler = function (callback) {
    if (SocketInterface.handlers['avgprice']['raw'] == undefined) {
        SocketInterface.handlers['avgprice']['raw'] = [];
    }
    SocketInterface.handlers['avgprice']['raw'].push(callback);
}

SocketInterface.add_mktcap_handler = function (callback) {
    if (SocketInterface.handlers['mktcap']['raw'] == undefined) {
        SocketInterface.handlers['mktcap']['raw'] = [];
    }
    SocketInterface.handlers['mktcap']['raw'].push(callback);
}

SocketInterface.send_subscriptions = function () {
    var multi_subscribe = [];
    for (var s_type in SocketInterface.subscriptions) {
        for (var s_vector in SocketInterface.subscriptions[s_type]) {
            v = [s_type];
            v.push.apply(v, JSON.parse(s_vector));
            if (s_type == 'avgprice' && SocketInterface.subscriptions[s_type][s_vector] > 1) {
                v.push.apply(v, [SocketInterface.subscriptions[s_type][s_vector]]);
            }
            multi_subscribe.push(v);
        }
    }
    SocketInterface.socket.emit('multi_subscribe', multi_subscribe, SocketInterface.get_signature(multi_subscribe));
}

SocketInterface.handle_trade = function (data) {
    if (SocketInterface.log_outsize_after_mins) {
        SocketInterface.total_bytes += JSON.stringify(data).length;
    }
    exchange_id = data[0];
    from_coin_id = data[1];
    to_coin_id = data[2];
    at = Math.floor(Date.now() / 1000);  // used to be `at = data[3];` but streamer currently always sends 0
    price = data[4];
    volume = data[5];
    volume24_from = data[6];
    volume24_to = data[7];
    delta24 = data[8];
    high = data[9];
    low = data[10];
    from_to_pref_rate = data[11];

    if (SocketInterface.handlers['trades']['raw'] != undefined) {
        for (var ix in SocketInterface.handlers['trades']['raw']) {
            SocketInterface.handlers['trades']['raw'][ix]();
        }
    }
    for (sub in SocketInterface.handlers['trades']) {
        if (sub == '[' + from_coin_id + ',' + to_coin_id + ']') {
            for (var ix in SocketInterface.handlers['trades'][sub]) {
                SocketInterface.handlers['trades'][sub][ix]();
            }
        }
    }
}

SocketInterface.handle_avgprice = function (data) {
    if (SocketInterface.log_outsize_after_mins) {
        SocketInterface.total_bytes += JSON.stringify(data).length;
    }
    from_coin_id = data[0];
    to_coin_id = data[1];
    price = data[2];
    at = Math.floor(Date.now() / 1000);  // used to be `at = data[3];` but streamer currently always sends 0
    delta24pct = data[4];
    volume24_from = data[5];
    volume24_to = data[6];
    current_supply = data[7];
    max_supply = data[8];
    desc = data[9];
    high24 = data[10];
    low24 = data[11];
    marketcap = data[12];
    from_to_pref_rate = data[13];
    pref_coin_id = data[14];
    total_volume24f = data[15];
    total_volume24t = data[16];
    total_volume1t = data[17];
    total_volume7t = data[18];
    total_volume30t = data[19];
    delta1pct = data[20];
    delta7pct = data[21];
    delta30pct = data[22];
    is_direct_pair = data[23];

    if (SocketInterface.handlers['avgprice']['raw'] != undefined) {
        for (var ix in SocketInterface.handlers['avgprice']['raw']) {
            SocketInterface.handlers['avgprice']['raw'][ix]();
        }
    }
    for (sub in SocketInterface.handlers['avgprice']) {
        if (sub == '[' + from_coin_id + ',' + to_coin_id + ']') {
            for (var ix in SocketInterface.handlers['avgprice'][sub]) {
                SocketInterface.handlers['avgprice'][sub][ix]();
            }
        }
    }
}

SocketInterface.handle_mktcap = function (data) {
    if (SocketInterface.log_outsize_after_mins) {
        SocketInterface.total_bytes += JSON.stringify(data).length;
    }
    total_market_cap = data[0];
    btc_market_cap = data[1];
    total_volume24 = data[2];

    if (SocketInterface.handlers['mktcap']['raw'] != undefined) {
        for (var ix in SocketInterface.handlers['mktcap']['raw']) {
            SocketInterface.handlers['mktcap']['raw'][ix]();
        }
    }
}

SocketInterface.heartbeat = function(type) {
    return; // disabled
    $.ajax({
        type: 'POST',
        url: '/hb',
        data: 'type=' + type + '&sid=' + SocketInterface.socket.io.engine.id + '&url=' + window.location.pathname,
        dataType: 'json'
    });
}

var Homepage = function() {
    var reordering;
    var stop_streamer_updates = false;  // set this to true to stop avgprice_handler()

    var handleHomepage = function() {

        $('.nav-tabs a').click(function() {
            // empty all tabs, so we don't keep all data+charts for the hidden tabs
            $('#top').html('');
            $('#starred').html('');
            $('#portfolio').html('');
            $('#movers').html('');
            $('#custom').html('');
            // show loader
            var tab = $(this).attr('href').replace('#', '');
            $('#' + tab).html('<div class="mt-4 mb-3" style="font-size: 24px;"><i class="fas fa-spinner fa-spin"></i> '+ _t("Loading...") +'</div>');
            stop_streamer_updates = true;
            // load
            $('#' + tab).load(i18n.normalizeURL('/home_tab_load?tab=' + tab), function() {
                setTimeout(drawSmallCharts, 100); // make sure small charts are drawn later
                stop_streamer_updates = false;
                try {
                    Trade.reinitButtonHandlers();
                } catch (e) {
                    console.log(e);
                }
            });
            // save preference
            $.ajax({
                type: 'POST',
                url: '/stars',
                data: 'tab=' + tab,
                dataType: 'json'
            });
        });

    }

    return {
        init: function() {
            Highcharts.setOptions({
                global: {
                    useUTC: false
                }
            });
            handleHomepage();
        },

        initFilters: function() {
            // Un-disable form fields when page loads, in case they click back after submission
            $('form#filters').find(':input').prop('disabled', false);
        },

        setFilters: function() {
            // include all selected fields in one parameter
            var arr = [];
            $('form#filters input:checked[name=field]').each(function() {
                arr.push($(this).val());
                $(this).attr('disabled', 'disabled');
            });
            $('form#filters input[name=fields]').val(arr.join('-'));

            // disable empty fields so they won't go into the query string
            $('form#filters').find(':input').filter(function() {
                return !this.value;
            }).attr('disabled', 'disabled');

            if (window.location.pathname == '/') {
                Homepage.saveCustomSearch();
                return false;
            } else {
                return true;
            }
        },

        handleStarredSearch: function() {
            // only keep coins
            var data = [];
            for (var i = 0; i < coin_search_options.source.length; i++) {
                item = coin_search_options.source[i];
                if (item.symbol != '') {
                    data.push(item);
                }
            }
            coin_search_options.source = data;
            coin_search_options.afterSelect = function(item) {
                Generic.add_star(item.id);
                $('#starred-search-form i.fa-search').removeClass('fa-search').addClass('fa-spin fa-sync');
            };
            $('#starred_search').typeahead(coin_search_options);
            $('#starred-search-form .input-group').css('left', '');
        },

        changePeriod: function(pref_period) {
            var btn = 'button.ch-period';
            var html = $(btn).html();
            $(btn).attr('disabled', 'disabled');
            $(btn).html('<i class="fal fa-spin fa-spinner"></i>');
            stop_streamer_updates = true;

            $.ajax({
                type: 'POST',
                url: i18n.normalizeURL('/pref_period_save'),
                data: 'pref_period=' + pref_period,
                dataType: 'json'
            }).done(function(data) {
                if ($('#top').length) {
                    // if in home make sure active tab is reloaded
                    var tab = $('ul.nav.nav-tabs a.active').attr('href').substr(1);
                    $('#' + tab).load(i18n.normalizeURL('/home_tab_load?tab=' + tab), function() {
                        setTimeout(drawSmallCharts, 100); // make sure small charts are drawn later
                        stop_streamer_updates = false;
                    });
                } else {
                    location.reload(true);
                }
            }).fail(function($xhr) {
                var data = $xhr.responseJSON;
                alertErr('.container:has(table.coinlist)', data.error);
                $(btn).removeAttr('disabled');
                $(btn).html(html);
                stop_streamer_updates = false;
            });
            return false;
        },

        setOrder: function(pref_order) {
            if (reordering == true) {
                return false;
            }
            reordering = true;
            stop_streamer_updates = true;
            var cur_order = (pref_order == 'marketcap' ? 'volume' : 'marketcap');
            var sel = 'table.coinlist th i.order-' + pref_order;
            var sel2 = '.coinlist-footer-controls a.order';
            $(sel).removeClass('fa-angle-double-down');
            $(sel).addClass('fa-spin fa-spinner');
            $(sel).css('color', '#333');
            $(sel2).append(' <i class="fal fa-spin fa-spinner"></i>');

            $.ajax({
                type: 'POST',
                url: '/pref_order_save',
                data: 'pref_order=' + pref_order,
                dataType: 'json'
            }).done(function(data) {
                if ($('#top').length) {
                    // if in home make sure active tab is reloaded
                    var tab = $('ul.nav.nav-tabs a.active').attr('href').substr(1);
                    $('#' + tab).load(i18n.normalizeURL('/home_tab_load?tab=' + tab), function() {
                        setTimeout(drawSmallCharts, 100); // make sure small charts are drawn later
                        reordering = false;
                        stop_streamer_updates = false;
                    });
                } else {
                    location.reload(true);
                }
            }).fail(function($xhr) {
                var data = $xhr.responseJSON;
                alertErr('.container:has(table.coinlist)', data.error);
                $(sel).removeClass('fa-spin fa-spinner');
                $(sel).addClass('fa-angle-double-down');
                $(sel2 + ' i').remove();
                reordering = false;
                stop_streamer_updates = false;
            });
            return false;
        },

        refreshTopBoxes: function(total_market_cap, btc_market_cap, total_volume) {
            // mcap
            update_value(Generic.selector.get('.top_b_mcap a'),
                format_large_number(total_market_cap), true, false);

            // btc
            if (total_market_cap > 0) {
                update_value(Generic.selector.get('.top_b_btc a'),
                    (btc_market_cap / total_market_cap * 100).toFixed(2) + '%', true, false);
            }
            update_value(Generic.selector.get('.top_b_btc .stat-note'),
                'BTC: ' + Settings.prefShortSymbol + format_large_number(btc_market_cap), false, false);

            // vol
            update_value(Generic.selector.get('.top_b_vol a'),
                format_large_number(total_volume), true, false);
        },

        toggleFilters: function() {
            if ($('#filters').is(':visible')) {
                $('#filters').parent().addClass('d-none');
                $('#filters-btn').html(_t('Show'));
            } else {
                $('#filters').parent().removeClass('d-none');
                $('#filters-btn').html(_t('Hide'));
            }
        },

        copyURL: function(el) {
            var textArea = document.createElement('textarea');
            textArea.style.position = 'fixed';
            textArea.style.top = 0;
            textArea.style.left = 0;
            textArea.style.width = '2em';
            textArea.style.height = '2em';
            textArea.style.padding = 0;
            textArea.style.border = 'none';
            textArea.style.outline = 'none';
            textArea.style.boxShadow = 'none';
            textArea.style.background = 'transparent';
            textArea.value = window.location.href;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            $(el).removeClass('btn-secondary').addClass('btn-success').html('Link copied');
        },

        saveCustomSearch: function() {
            Generic.blockUI();
            stop_streamer_updates = true;
            $.ajax({
                type: 'POST',
                url: '/custom_tab_search_save',
                data: $('form#filters').serialize(),
                dataType: 'json'
            }).done(function(data) {
                $('#custom').load(i18n.normalizeURL('/home_tab_load?tab=custom'), function() {
                    Homepage.initFilters();
                    window.scrollTo(0, 0);
                    Generic.unblockUI();
                    stop_streamer_updates = false;
                    setTimeout(drawSmallCharts, 1000); // make sure small charts are drawn later (needs a bit more time here)
                });
            }).fail(function($xhr) {
                Generic.unblockUI();
                var data = $xhr.responseJSON;
                alertErr('#custom', data.error);
                stop_streamer_updates = false;
            });
            return false;
        }

    };
}();

Homepage.avgprice_handler = function(from_coin_id, price, delta, pref_coin_id, total_volume24f,
                                     total_volume, from_to_pref_rate, marketcap) {
    if (Homepage.stop_streamer_updates) return;
    update_value(Generic.selector.get('.avgprice-' + from_coin_id), Settings.prefShortSymbol + format_price(price), true, false);
    update_value(Generic.selector.get('.avgprice-' + from_coin_id + '-' + pref_coin_id), get_short_symbol(pref_coin_id) + ' ' +
        format_price(price * from_to_pref_rate), true, false);
    if (delta >= 0) {
        Generic.selector.get('.delta-' + from_coin_id).addClass('up').removeClass('down');
        delta = '+' + parseFloat(delta).toFixed(2);
    } else {
        Generic.selector.get('.delta-' + from_coin_id).removeClass('up').addClass('down');
        delta = parseFloat(delta).toFixed(2);
    }
    if (delta.indexOf('null') == -1) {
        update_value(Generic.selector.get('.delta-' + from_coin_id), delta + '%', false, false);
    }
    update_value(Generic.selector.get('.volume-' + from_coin_id), Settings.prefShortSymbol + format_large_number(total_volume), false, false);
    update_value(Generic.selector.get('.volume24f-' + from_coin_id), get_short_symbol(from_coin_id) + ' ' + format_large_number(total_volume24f), false, false);
    update_value(Generic.selector.get('.marketcap-' + from_coin_id), Settings.prefShortSymbol + format_large_number(marketcap), false, false);
}

Homepage.delta_handler = function(fld, delta) {
    if (delta >= 0) {
        Generic.selector.get(fld).addClass('up').removeClass('down');
        if (delta > 1) {
            delta = '+' + format_price(delta);
        } else {
            delta = '+' + delta;
        }
    } else {
        Generic.selector.get(fld).removeClass('up').addClass('down');
        if (delta < -1) {
            delta = format_price(delta);
        }
    }
    if (delta.indexOf('null') == -1) {
        update_value(Generic.selector.get(fld), delta + '%', false, false);
    }
}

Homepage.avgprice_handler_coins = function(from_coin_id, price, marketcap,
                                           total_volume1t, total_volume24t, total_volume7t, total_volume30t,
                                           delta1pct, delta24pct, delta7pct, delta30pct) {
    if (Homepage.stop_streamer_updates) return;
    update_value(Generic.selector.get('.avgprice-' + from_coin_id), Settings.prefShortSymbol + format_price(price), true, false);
    update_value(Generic.selector.get('.marketcap-' + from_coin_id), Settings.prefShortSymbol + format_large_number(marketcap), false, false);
    update_value(Generic.selector.get('.volume1-' + from_coin_id), Settings.prefShortSymbol + format_large_number(total_volume1t), false, false);
    update_value(Generic.selector.get('.volume24-' + from_coin_id), Settings.prefShortSymbol + format_large_number(total_volume24t), false, false);
    update_value(Generic.selector.get('.volume7-' + from_coin_id), Settings.prefShortSymbol + format_large_number(total_volume7t), false, false);
    update_value(Generic.selector.get('.volume30-' + from_coin_id), Settings.prefShortSymbol + format_large_number(total_volume30t), false, false);
    Homepage.delta_handler('.delta1-' + from_coin_id, delta1pct);
    Homepage.delta_handler('.delta24-' + from_coin_id, delta24pct);
    Homepage.delta_handler('.delta7-' + from_coin_id, delta7pct);
    Homepage.delta_handler('.delta30-' + from_coin_id, delta30pct);
}

function CoinChart() {}

CoinChart.init = function(fromSymbol, fromShowSymbol, fromShortSymbol, prefSymbol, prefShortSymbol) {
    CoinChart.fromSymbol = fromSymbol;
    CoinChart.fromShowSymbol = fromShowSymbol;
    CoinChart.fromShortSymbol = fromShortSymbol;
    CoinChart.prefSymbol = prefSymbol;
    CoinChart.prefShortSymbol = prefShortSymbol;
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });
    CoinChart.chartType = null;
    CoinChart.isLog = false;
    CoinChart.chartShowsAvg = true;
    CoinChart.chartSelectLast = $('#chart-select option:selected').val();
    $('#log-chart-switch').change(function() {
        var chart = $('#historical-chart').highcharts();
        if (!chart) return;
        if (this.checked) {
            CoinChart.isLog = true;
            chart.update({yAxis: [{type: 'logarithmic'}, {type: 'linear',floor: 0}, {type: 'logarithmic'}, {type: 'logarithmic'}]})
            chart.yAxis[3].update({tickPositions:[Math.log10(CoinChart.current_price) ]});
        } else {
            CoinChart.isLog = false;
            chart.update({yAxis: [{type: 'linear'}, {type: 'linear', floor: 0}, {type: 'linear'}, {type: 'linear'}]})
            chart.yAxis[3].update({tickPositions:[CoinChart.current_price]});
        }
    });
    $('#ohlc-chart-switch').change(function() {
        var chart = $('#historical-chart').highcharts();
        if (!chart) return;
        if (this.checked) {
            var need_refresh;
            need_refresh = false;
            if ($('#chart-select option:selected').length > 0) {
                $('#chart-select option:selected').each(function() {
                    if ($(this).val() != CoinChart.chartSelectLast) {
                        need_refresh = true;
                        $("#chart-select").multiselect('deselect', $(this).val());
                    }
                });
                if ($('#chart-select option:selected').length == 0) {
                    $('#chart-select').multiselect('select', -1);
                    CoinChart.chartSelectLast = -1;
                    need_refresh = true;
                }
            }
            chart.series[0].update({type: 'candlestick'}, true);
            CoinChart.chartType = 'candlestick';
            if (need_refresh) CoinChart.select_chart([CoinChart.chartSelectLast]);
        } else {
            CoinChart.chartType = 'area';
            chart.series[0].update({type: 'area'}, true);
        }
        // save preference
        $.ajax({
            type: 'POST',
            url: '/stars',
            data: 'candle=' + (this.checked ? 1 : 0),
            dataType: 'json'
        });

    });
    $('#chart-options-btn').on('click', function(event) {
        $('#chart-options').toggle();
        $('#chart-options').removeClass('d-none');
    });
    $('#chart-select').multiselect({
        buttonClass: 'btn btn-secondary',
        templates: {
            li: '<li><a tabindex="0" class="dropdown-item"><label></label></a></li>',
        },
        enableCaseInsensitiveFiltering: true,
        dropRight: true,
        enableHTML: true,
        maxHeight: 300,
        disabledText: 'Average',
        onChange: function(option, checked, select) {
            if ($('#historical-chart').highcharts().series[0].type == 'candlestick') {
                $("#chart-select").multiselect('select', option.val());
                $("#chart-select").multiselect('deselect', CoinChart.chartSelectLast);
            }
            CoinChart.chartSelectLast = option.val();
            var selected = [];
            var chartshowsavg = false;
            $('#chart-select option:selected').each(function() {
                selected.push($(this).val());
                if ($(this).val() == -1) chartshowsavg = true;
            });
            if (selected.length == 0) {
                $('#chart-select').multiselect('select', -1);
                CoinChart.chartSelectLast = -1;
                CoinChart.select_chart([-1]);
                chartshowsavg = true;
            } else {
                CoinChart.select_chart(selected);
            }
            CoinChart.chartShowsAvg = chartshowsavg;
            CoinChart.live_update_chart(CoinChart.current_price);
        }
    });
}

CoinChart.draw_historic_chart = function(candleView) {
    CoinChart.chartType = candleView ? 'candlestick' : 'area';
    if ($('#historical-chart').length == 0) return;
    $.getJSON('/api/history?f=' + CoinChart.fromSymbol + '&t=' + CoinChart.prefSymbol + '&callback=?', function(data) {
        var price = [];
        var otherprice = [];
        var uts = [];
        var volume = [];
        var minValue = Number.MAX_SAFE_INTEGER;
        var minOtherValue = Number.MAX_SAFE_INTEGER;
        var ix = 0;
        var other_coin_id = data['other'];
        var other_coin_symbol = data['other_symbol'];
        for (var ut in data['data']) {
            d = data['data'][ut];
            uts.push([parseInt(ut)]);
            ix++;
            if (ix == 1) {
                //skip first value (otherwise clicking on all won't reflect a range change)
                continue;
            }
            if (d[-1][0] < minValue) minValue = d[-1][0];
            if (d[-1][0] == "null") {
                price.push([parseInt(ut), null, null, null, null]);
            } else {
                price.push([parseInt(ut), d[-1][2], d[-1][3], d[-1][4], d[-1][0]]);
            }
            volume.push([parseInt(ut), d[-1][1] == "null" ? null : d[-1][1]]);
            if (other_coin_id) {
                otherprice.push([parseInt(ut), d['c' + data['other']][0] == "null" ? null : d['c' + data['other']][0]]);
                if (d['c' + data['other']][0] < minOtherValue) minOtherValue = d['c' + data['other']][0];
            }
        }
        // create the chart
        Highcharts.setOptions({
            lang: {
                rangeSelectorZoom: ''
            }
        });
        Highcharts.stockChart('historical-chart', {
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 768
                    },
                    chartOptions: {
                        chart: {
                            spacing: [10,0,10,0]
                        }
                    }
                }]
            },
            chart: {
                zoomType: 'x',
                pinchType : 'none',
                events: {
                    load: function() {
                        CoinChart.graph_delta = this.renderer.label('', 7, 40, null, null, null, true).css(
                            {
                                fontSize: '0.8em'
                            }).add();
                        CoinChart.updateGraphCustomLabels(this);
                        CoinChart.live_update_chart(CoinChart.current_price);
                        setInterval(function() { CoinChart.maybeRefreshChart(); }, 30000);
                        if (data['defaultview']) {
                            $($('.highcharts-button.highcharts-button-normal')[1]).find('text').css("font-weight","bold");
                        } else {
                            $('.highcharts-button.highcharts-button-normal').last().find('text').css("font-weight","bold");
                        }
                    }
                }
            },
            credits: {
                enabled: false
            },
            scrollbar: {
                enabled: false,
                liveRedraw: false
            },

            // effective disabled but not really due to highstock bug
            navigator : {
                adaptToUpdatedData: false,
                series : {
                    data : uts
                },
                height: 0,
                xAxis: {
                    labels: {
                        enabled: false
                    }
                },
                handles: {
                    backgroundColor: 'transparent',
                    borderColor: 'transparent'
                },
                outlineWidth: 0
            },
            rangeSelector: {
                buttons: [
                    {
                        type: 'hour',
                        count: 1,
                        text: _t('1h'),
                    }, {
                        type: 'day',
                        count: 1,
                        text: _t('1d'),
                    }, {
                        type: 'day',
                        count: 6,
                        text: _t('7d'),
                    }, {
                        type: 'month',
                        count: 1,
                        text: _t('1m'),
                    }, {
                        type: 'month',
                        count: 3,
                        text: _t('3m'),
                    }, {
                        type: 'month',
                        count: 6,
                        text: _t('6m'),
                    }, {
                        type: 'ytd',
                        count: 1,
                        text: _t('YTD'),
                    }, {
                        type: 'year',
                        count: 1,
                        text: _t('1y'),
                    }, {
                        type: 'all',
                        text: _t('All'),
                    }
                ],
                inputEnabled: true
            },

            xAxis: {
                events: {
                    afterSetExtremes: CoinChart.afterSetExtremes
                },
                gridLineColor: '#eeeeee',
                minRange: 600 * 1000 // 10 minutes
            },

            yAxis: [
                {
                    tickLength: 0,
                    labels: {
                        formatter: function () {
                            return htmlDecode(CoinChart.prefShortSymbol) + format_price(this.value);
                        },
                        align: 'right',
                        x: 0
                    },
                    title: {
                        text: null,
                    },
                    top: '3%',
                    height: '97%',
                    lineWidth: 0,
                    min: minValue,
                    alignTicks: false,
                    startOnTick: false,
                    endOnTick: false,
                    gridLineColor: 'rgba(200, 200, 200, 0.1)',
                }, {
                    visible: false,
                    title: {
                        text: _t('Volume')
                    },
                    top: '65%',
                    height: '35%',
                    offset: 0,
                    min: 0
                }, {
                    gridLineColor: 'rgba(200, 200, 200, 0.1)',
                    visible: true,
                    opposite: false,
                    tickLength: 0,
                    labels: {
                        formatter: function () {
                            return format_price(this.value);
                        },
                        align: 'left',
                        x: 0
                    },
                    title: {
                        text: null,
                    },
                    height: '100%',
                    lineWidth: 0,
                    min: minOtherValue,
                },

                {
                    opposite:true,
                    linkedTo:0,
                    tickLength: 0,
                    tickPositions:[price[price.length - 1][4]],
                    gridLineWidth: 1,
                    gridLineColor: '#2e7ad0',
                    labels: {
                        useHTML: true,
                        align: 'right',
                        x: 0,
                        y: -30,
                        formatter: function() {
                            return '<span style="background-color: #2e7ad0; padding: 2px; color: #fff;border: 1px solid #999999;">' + htmlDecode(CoinChart.prefShortSymbol) + format_price(this.value) + '</span>';
                        }
                    }
                }
            ],

            tooltip: {
                split: true,
                useHTML: true,
                formatter: function () {
                    if ($('#historical-chart').highcharts().series[0].type != 'candlestick') {
                        s = '<table class="tip"><caption>' + Highcharts.dateFormat('%d %b, %Y %H:%M', this.points[0].x) + '</caption><tbody>';
                        for (ix = 0; ix < this.points.length; ++ix) {
                            if (this.points[ix].series.options.id != 'mainvolume') {
                                s += '<tr><td>' + this.points[ix].series.name + ': </td><td>' + htmlDecode(CoinChart.prefShortSymbol) + format_large_number(this.points[ix].y, true) + '</td></tr>';
                            } else if (this.points[ix].series.options.id == 666) {
                                s += '<tr><td>' + this.points[ix].series.name + ' ' + _t('price:') + '</td><td>' + format_price(this.points[ix].y) + '</td></tr>';
                            } else {
                                s += '<tr><td>' + this.points[ix].series.name + ' ' + _t('price:') + ' </td><td>' + htmlDecode(CoinChart.prefShortSymbol) + format_price(this.points[ix].y) + '</td></tr>';
                            }
                        }
                        s += '</tbody></table>';
                    } else {
                        s = '<table class="tip"><caption>' + Highcharts.dateFormat('%d %b, %Y %H:%M', this.points[0].x) + '</caption><tbody>';
                        for (ix = 0; ix < this.points.length; ++ix) {
                            if (this.points[ix].series.options.id != 'mainvolume') {
                                s += '<tr><td>' + this.points[ix].series.name + ': </td><td>' + htmlDecode(CoinChart.prefShortSymbol) + format_large_number(this.points[ix].y, true) + '</td></tr>';
                            } else if (this.points[ix].series.options.id == 666) {
                                s += '<tr><td>' + this.points[ix].series.name + ' ' + _t('price:') + ' </td><td>' + format_price(this.points[ix].y) + '</td></tr>';
                            } else {
                                var yData;
                                if (!this.points[0].series.groupedData && this.points[0].point.open) {
                                    yData = this.points[0].point;
                                } else {
                                    for (var index = 0; index < this.points[0].series.groupedData.length; index++) {
                                        if (this.points[0].series.groupedData[index] != undefined && this.points[0].series.groupedData[index].x == this.points[0].x) break;
                                    }
                                    yData = this.points[0].series.groupedData[index];
                                }
                                if (!yData) return;
                                s += '<tr><td>' + this.points[ix].series.name + ' '+_t('Open:')+' </td><td>' + htmlDecode(CoinChart.prefShortSymbol) + format_price(yData.open) + '</td></tr>';
                                s += '<tr><td>' + this.points[ix].series.name + ' '+_t('High:')+' </td><td>' + htmlDecode(CoinChart.prefShortSymbol) + format_price(yData.high) + '</td></tr>';
                                s += '<tr><td>' + this.points[ix].series.name + ' '+_t('Low:')+' </td><td>' + htmlDecode(CoinChart.prefShortSymbol) + format_price(yData.low) + '</td></tr>';
                                s += '<tr><td>' + this.points[ix].series.name + ' '+_t('Close:')+' </td><td>' + htmlDecode(CoinChart.prefShortSymbol) + format_price(yData.close) + '</td></tr>';
                            }
                        }
                        s += '</tbody></table>';
                    }
                    return s;
                },
            },
            plotOptions: {
                column: {
                    borderColor: 'rgba(132, 184, 235, 0.8)',
                    pointPadding: 0.1,
                    groupPadding: 0.1,
                    color: 'rgba(132, 184, 235, 0.8)',
                    yAxis: 1,
                    stacking: 'normal',
                    showInLegend: false,
                    animation: false,
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 3,
                        approximation: 'sum'
                    }
                },
                area: {
                    animation: false,
                    lineWidth: 1,
                    fillOpacity: 0.3,
                },
                series: {
                    animation: false,
                    lineWidth: 1,
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 3,
                        approximation: 'close'
                    }
                },
                candlestick: {
                    color: 'red',
                    upColor: 'green',
                    lineColor: 'green',
                    upLineColor: 'red',
                    dataGrouping: {
                        enabled: true,
                        groupPixelWidth: 12,
                        approximation: 'ohlc'
                    }
                },
            },
            legend: {
                enabled: true,
                y: 0,
                padding: 0,
                itemMarginBottom:0,
                itemMarginTop:0,
            },
            series: [
                {
                    name: _t('Avg.') + ' ' + CoinChart.fromShowSymbol + CoinChart.prefSymbol,
                    type: candleView ? 'candlestick' : 'area',
                    data: price,
                    zIndex: 2,
                }, {
                    name: _t('Total volume'),
                    type: 'column',
                    data: volume,
                    zIndex: 0,
                    id: 'mainvolume'
                }].concat(other_coin_id ? [{
                    zIndex: 1,
                    id: 666,
                    visible: false,
                    name: _t('Avg.') + ' ' + CoinChart.fromShowSymbol + other_coin_symbol,
                    type: 'area',
                    data: otherprice,
                    fillOpacity: 0,
                    yAxis: 2
                }] : []),
        });
    });
}


CoinChart.select_chart = function(e) {
    CoinChart.exchange = e;
    CoinChart.redraw_historic_chart($('#historical-chart').highcharts().xAxis[0].min,
                                   $('#historical-chart').highcharts().xAxis[0].max);
}

CoinChart.redraw_historic_chart = function(start, end) {
    var chart = $('#historical-chart').highcharts();
    chart.showLoading(_t('Loading...'));
    $.getJSON('/api/history?f=' + CoinChart.fromSymbol + '&t=' + CoinChart.prefSymbol + '&start=' + start +
              '&end=' + end + '&exchange=' + JSON.stringify(CoinChart.exchange) + '&callback=?', function (data) {
                  var chartdata = {};
                  var minValue = Number.MAX_SAFE_INTEGER;
                  var other_coin_symbol = data['other_symbol'];
                  var minValue2 = Number.MAX_SAFE_INTEGER;
                  var ex_count = 0;
                  var disabled_mask = {};
                  for (var ut in data['data']) {
                      for (var ex in data['data'][ut]) {
                          if (chartdata[ex] == undefined) {
                              chartdata[ex] = {0:[], 1:[]};
                              ex_count++;
                          }
                          if ((ex + "").substring(0, 1) != 'c' && data['data'][ut][ex][4] < minValue) minValue = data['data'][ut][ex][4];
                          if ((ex + "").substring(0, 1) == 'c' && data['data'][ut][ex][4] < minValue2) minValue2 = data['data'][ut][ex][4];
                          if (data['data'][ut][ex][0] == "null") {
                              chartdata[ex][0].push([parseInt(ut), null, null, null, null]);
                          } else {
                              chartdata[ex][0].push([parseInt(ut), data['data'][ut][ex][2], data['data'][ut][ex][3],
                                                     data['data'][ut][ex][4], data['data'][ut][ex][0]]);
                          }
                          chartdata[ex][1].push([parseInt(ut), data['data'][ut][ex][1] == "null" ? null : data['data'][ut][ex][1]]);
                      }
                  }
                  var charttype = chart.series[0].type;
                  while(chart.series.length > 0) {
                      if (!chart.series[0].visible) {
                          disabled_mask[chart.series[0].name] = 1;
                      }
                      chart.series[0].remove(true);
                  }

                  exs = Object.keys(chartdata);
                  if (chartdata[-1] != undefined) {
                      exs = ["-1"].concat(exs.filter(function(item) { return item != -1}));
                  }
                  var default_color = true;
                  for (var ix = 0; ix < exs.length; ix++) {
                      if ((exs[ix] + "").substring(0, 1) != 'c' && exs[ix] != -1) default_color = false;
                  }
                  for (var ix = 0; ix < exs.length; ix++) {
                      ex = exs[ix];
                      hasvolume = true;
                      if ((ex + "").substring(0, 1) == 'c') {
                          name = _t('Avg.')+ ' ' + CoinChart.fromShowSymbol + other_coin_symbol;
                          hasvolume = false;
                          if (disabled_mask[name] == undefined) {
                              disabled_mask[name] = true;
                          }
                      } else if (ex == -1) {
                          name = _t('Avg.') + ' ' + CoinChart.fromShowSymbol + CoinChart.prefSymbol;
                      } else {
                          name = window.ALL_EXCHANGES[ex][0];
                      }
                      chart.addSeries({
                          name: name,
                          type: hasvolume ? charttype : 'line',
                          data: chartdata[ex][0],
                          yAxis: hasvolume ? 0 : 2,
                          visible: disabled_mask[name] ? false : true,
                          id: hasvolume ? null : 666,
                          zIndex: charttype == 'candlestick' ? 1 : 0,
                          colorIndex: ix
                      });
                      if (hasvolume) {
                          series = {
                              name: (ex == -1 ? _t('Total') :
                                    window.ALL_EXCHANGES[ex][0]) + ' '+ _t('volume'),
                              type: 'column',
                              data: chartdata[ex][1],
                              zIndex: 0,
                              id: ex == -1 ? 'mainvolume' : null
                          };
                      }
                      if (ex != -1) {
                          var magic = chart.series.length - 1;
                          if (ix == 0) magic = 0;
                          chart.series[magic].update({fillOpacity:0});
                      }
                      if (!default_color && ex_count > 1) {
                          series['color'] = chart.series[chart.series.length - 1].color;
                          series['borderColor'] = chart.series[chart.series.length - 1].color;
                          chart.legend.update({enabled: true});
                      } else {
                          chart.series[chart.series.length - 1].update({fillOpacity:0.2});
                      }
                      if (hasvolume) {
                          chart.addSeries(series);
                      }
                  }
                  chart.yAxis[0].setExtremes(minValue, null);
                  chart.yAxis[2].setExtremes(minValue2, null);
                  chart.hideLoading();
                  CoinChart.updateGraphCustomLabels(chart);
                  CoinChart.live_update_chart(CoinChart.current_price);
              });
}

CoinChart.updateGraphCustomLabels = function(chart) {
    updateGraphCustomLabels(CoinChart.graph_delta, chart, CoinChart.prefShortSymbol);
}

CoinChart.afterSetExtremes = function(e) {
    if (e.dataMin == null || e.dataMax == null ||
        (Math.abs(e.dataMin - e.min) <= 1200000 && Math.abs(e.dataMax - e.max) <= 120000)) {
        return;
    }
    CoinChart.redraw_historic_chart(Math.round(e.min), Math.round(e.max));
}

CoinChart.maybeRefreshChart = function () {
    var now = get_timestamp() * 1000;
    var chart = $('#historical-chart').highcharts();
    if (chart && now - chart.xAxis[0].max < 600 * 1000) {
        // upper bound is within the last 10 minutes, let's ajax refresh the last day's worth of data
        // except the last data point (stream-updated)
        $.getJSON('/api/history?f=' + CoinChart.fromSymbol + '&t=' + CoinChart.prefSymbol + '&callback=?', function (data) {
            var db_values = {};
            for (var ut in data['data']) {
                d = data['data'][ut];
                db_values[parseInt(ut)] = {
                    'ohlc': [parseInt(ut), d[-1][2], d[-1][3], d[-1][4], d[-1][0]],
                    'volume' : [parseInt(ut), d[-1][1] == "null" ? null : d[-1][1]]};
            }
            var cdata = chart.series[0].options.data;
            for (var ix = 0; ix < cdata.length - 1; ix++) {
                if (db_values[cdata[ix][0]] != undefined) {
                    cdata[ix] = db_values[cdata[ix][0]]['ohlc'];
                } else if (ix > 0 && cdata[ix-1][4] != cdata[ix][1]) {
                    // Fix prev-close = new-open
                    cdata[ix][1] = cdata[ix-1][4];
                }
            }
            chart.series[0].setData(cdata, true, true, false);
            if (chart.get('mainvolume') != undefined) {
                var vdata = chart.get('mainvolume').options.data;
                for (var ix = 0; ix < vdata.length; ix++) {
                    if (db_values[vdata[ix][0]] != undefined) {
                        vdata[ix] = db_values[vdata[ix][0]]['volume'];
                    }
                }
                chart.get('mainvolume').setData(vdata, true, true, false);
            }
        });
    }
}

CoinChart.live_update_chart = function(price) {
    if (price == undefined) return;
    CoinChart.current_price = price;
    var now = get_timestamp() * 1000;
    var chart = $('#historical-chart').highcharts();
    if (chart && now - chart.xAxis[0].max < 600 * 1000 && CoinChart.chartShowsAvg) {
        var cdata;
        cdata = chart.series[0].options.data;
        // pad price data until now:
        last_ut = cdata[cdata.length - 1][0];
        last_ut_price = cdata[cdata.length - 1][4]
        now_ut = now - (now % 60000);
        var padded = false;
        while (last_ut < now_ut) {
            // padding..
            last_ut += 60000;
            cdata.push([last_ut, last_ut_price, last_ut_price, last_ut_price, last_ut_price]);
            padded = true;
        }

        // pad volume data until now:
        if (chart.get('mainvolume') != undefined) {
            var vdata = chart.get('mainvolume').options.data;
            vlast_ut = vdata[vdata.length - 1][0];
            var vpadded = false;
            while (vlast_ut < now_ut) {
                // padding..
                vlast_ut += 60000;
                vdata.push([vlast_ut, null])
                vpadded = true;
            }
            if (vpadded) {
                chart.get('mainvolume').setData(vdata, true, true, false);
            }
        }

        if (CoinChart.chartType == 'area') {
            cdata[cdata.length - 1][1] = price;
        } else if (cdata.length > 1) {
            // Fix close-open
            cdata[cdata.length - 1][1] = cdata[cdata.length - 2][4];
        }
        // update with latest price data
        price = parseFloat(price);
        cdata[cdata.length - 1][2] = Math.max(price, cdata[cdata.length - 1][2]);
        cdata[cdata.length - 1][3] = Math.min(price, cdata[cdata.length - 1][3]);
        cdata[cdata.length - 1][4] = price;

        chart.yAxis[3].update({tickPositions:[CoinChart.isLog ? Math.log10(price) : price]});
        chart.series[0].setData(cdata, true, true, false);
        if (price < chart.yAxis[0].getExtremes().min) {
            chart.yAxis[0].setExtremes(price * 0.999, null);
        }
        if (padded) {
            chart.xAxis[0].setExtremes(chart.xAxis[0].min, now_ut);
        }
    } else if (chart) {
        chart.yAxis[3].update({tickPositions:[null]});
    }
    CoinChart.updateGraphCustomLabels(chart);
}

var Converter = function() {

    return {
        from_id: 0,
        to_id: 0,

        init: function() {
            // init quick search
            $.get('/searchable_items_json?converter=1', 'json', function(data) {
                var converter_search_options = {
                    source: data,
                    autoSelect: true,
                    items: 3,
                    afterSelect: function(item) {
                        if (this.$element[0].id == 'converter_from') {
                            Converter.from_id = item.id;
                        } else
                        if (this.$element[0].id == 'converter_to') {
                            Converter.to_id = item.id;
                        }
                    },
                    highlighter: function(item) {return item;},
                    sorter: function(items) {
                        var symbolBegins = [];
                        var nameBegins = [];
                        var contains = [];
                        var query = this.query.toLowerCase();
                        var item;

                        while ((item = items.shift())) {
                            var symbol = item.symbol.toLowerCase();
                            var name = item.name.toLowerCase();
                            if (symbol.indexOf(query) == 0) {
                                symbolBegins.push(item);
                            } else if (name.indexOf(query) == 0) {
                                nameBegins.push(item);
                            } else {
                                contains.push(item);
                            }
                        }

                        return symbolBegins.concat(nameBegins, contains);
                    }
                }

                $('#converter_from').typeahead(converter_search_options);
                $('#converter_to').typeahead(converter_search_options);

                // enable
                $('#converter input.form-control').prop('disabled', false);
                $('#converter button').prop('disabled', false);
            });
        },

        convert: function() {
            if (Converter.from_id == 0) {
                $('#conversion').html('<span class="text-danger">Please enter the From currency</span>');
                return;
            }
            if (Converter.to_id == 0) {
                $('#conversion').html('<span class="text-danger">Please enter the To currency</span>');
                return;
            }
            if (Converter.to_id == Converter.from_id) {
                $('#conversion').html('<span class="text-danger">Please select different currencies</span>');
                return;
            }
            $('#conversion').html('<i class="fal fa-spin fa-spinner"></i>');
            $.ajax({
                type: 'POST',
                url: '/get_price',
                data: 'coin1=' + Converter.from_id + '&coin2=' + Converter.to_id,
                dataType: 'json'
            }).done(function(data) {
                amount = parseFloat($('#converter_amount').val());
                if (!amount) {
                    amount = 1;
                }
                converted = format_price(data.price * amount);
                s = '<b>' + amount + ' ' + data.coin1_symbol + ' = ' + converted + ' ' + data.coin2_symbol + '</b>';
                s += '<br><span class="smaller">More precisely: ' + format_price_exact(data.price * amount) + '</span>';
                $('#conversion').html(s);
                $('input[name=ppc]').val();
            });
        }

    };

}();
