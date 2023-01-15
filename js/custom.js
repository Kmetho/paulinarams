$(function() {
    try {
        $('body').ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.08,
        });
    }
    catch (e) {
        $('.error').show().text(e);
    }
});