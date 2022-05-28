$(function () {

    $('.btn-add').click(function () {
        $('.product-add').fadeToggle("slow");
    });

    $('.btn-edit').click(function () {
        $('.product-add').fadeToggle("slow");
    });

    $('.btn-cancel').click(function () {
        $('.product-add').fadeToggle("slow");
    });

    $('.btn-delete').click(function () {
        window.confirm("Do you want to delete?")
    });

});