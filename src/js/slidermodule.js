import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

export default function sliderModule() {
    tns({
        container: '.testimonials__list',
        items: 1,
        prevButton: '.testimonials__prev',
        nextButton: '.testimonials__next',
        slideBy: 'page',
        autoplay: true,
        nav: false,
        autoplayButtonOutput: false,
        startIndex: 1,
        mouseDrag: true,
        autoHeight: true
    });
}
