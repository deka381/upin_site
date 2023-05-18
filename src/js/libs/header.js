import $ from 'jquery';

console.log('beforeinit');

export default class Header {
    constructor(e, p) {
        this.$e = $(e);
        this.$p = $(p);
        if (this.$e.length && this.$p.length) this.init();
    }

    init() {
        $(window).on('scroll', () => {
            let scroll = window.scrollY;
            if (scroll > this.$p.height()) { 
                scroll = this.$p.height();
                this.$e.addClass('fixed-header');
            }else{
                this.$e.removeClass('fixed-header');
            }
            // this.$e.css('margin-top', scroll * -1 + 'px');
        });
        $(window).trigger('scroll');
        $('.ham').on('click', () => {
            $('.ham, .header__left > ul').toggleClass('active');
            $('.ham').parent().toggleClass('active');
            if ($('.ham').hasClass('active')) {
                // this.$e.css('margin-top', this.$p.height() * -1 + 'px');
            } else {
                $(window).trigger('scroll');
            }
        });
        $('.ham').on('click', () => {
            $('.header__mobile-menu').toggleClass('active');
        });
        $('.menu-parent-1 > li > a').on('click', () => {
            // $('.header__mobile-menu').toggleClass('active');
        });
        $('.menu-parent-1 > li > a').on('click', () => {
            // $('.ham').toggleClass('active');
        });
        // $('.menu-parent-1 > li > a').hover(function () {
        //     console.log("@@@@@@@@@@@@@@@@");
        //     const $t = $('.ham');
        //     const $n = $('.header__mobile-menu');
        //     // $n.css('height', $n[0].scrollHeight + 'px');
        //     $n.toggleClass('active');
        //     $t.toggleClass('active');
        // }, function () {
        //     $(this).next().removeAttr('style');
        // });
        $('.menu-parent-1 > li.menu-item-has-children > a').each((i, e) => {
            const $e = $(e);
            $e.on('click', (x) => {
                if ($(window).width() > 920) return;
                if (!$e.hasClass('allowClick')) {
                    x.preventDefault();
                    $('.menu-parent-1 > li.menu-item-has-children > a').removeClass('allowClick');
                    $('.menu-parent-1 > li.menu-item-has-children > a').next().removeAttr('style');
                    console.log($e);
                    $e.next().addClass('active');
                    const $n = $e.next();
                    $n.css('height', $n[0].scrollHeight + 'px');
                    $e.addClass('allowClick');
                }
            })
        });
        $('.menu-parent-2 > li.menu-item-has-children > a').each((i, e) => {
            const $e = $(e);
            $e.on('click', (x) => {
                if (!$e.hasClass('allowClick')) {
                    x.preventDefault();
                    $('.menu-parent-2 > li.menu-item-has-children > a').removeClass('allowClick');
                    $('.menu-parent-2 > li.menu-item-has-children > a').next().removeAttr('style');
                    const $n = $e.next();
                    // $n.css('height', $n[0].scrollHeight + 'px');
                    $e.next().addClass('active');
                    $e.addClass('allowClick');
                    if ($(window).width() <= 920) {
                        setTimeout(() => {
                            let height = 0;
                            $e.parent().parent().children().each((i, e) => {
                                height += $(e).height() + 8;
                            });
                            // height = Math.min(height, $e.parent().parent()[0].scrollHeight);
                            $e.parent().parent().css('height', height + 'px');
                        }, 200);
                    }
                }
            })
        });
        const offsetMenu = () => {
            const offer = $('.menu-parent-1 > li:first-of-type .menu-parent-2');
            if ($(window).width() < 920) {
                offer.removeAttr('style');
            } else {
                // offer.css('margin-left', Math.min((offer.width() + offer[0].offsetLeft - $(window).width()) * -1, 0) + 'px');
            }
        };
        $(window).on('resize', () => {
            offsetMenu();
            $('.menu-parent-2 > li.menu-item-has-children > a').removeClass('allowClick');
            $('.menu-parent-2 > li.menu-item-has-children > a').next().removeAttr('style');
            $('.menu-parent-3 > li.menu-item-has-children > a').removeClass('allowClick');
            $('.menu-parent-3 > li.menu-item-has-children > a').next().removeAttr('style');
        });
        $(window).trigger('resize'); 
        $('.menu-parent-1 [href="#"]').removeAttr('href');
    }
} 