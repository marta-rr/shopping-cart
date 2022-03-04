let updatePricePerItem = function (ele) {
    let quantity = parseFloat($(ele).find('.amount input').val());
    let pricePerUnit = parseFloat($(ele).find('.pricePerUnit input').val());
    let pricePerItem = quantity * pricePerUnit;
    $(ele).children('.pricePerItem').html('$' + pricePerItem);
    return pricePerItem;
}


let updateTotalPrice = function(){
    let prices = [];

    $('tbody tr').each(function (i, ele) {
        let pricePerItem = updatePricePerItem(ele);
        prices.push(pricePerItem);
    });
    console.log(prices)
    let totalPrice = 0
    prices.forEach( price => totalPrice += price)
    $('#total-price').html(' ' + '$' + totalPrice);
    console.log(totalPrice);
}

$(document).ready(function () {
        updateTotalPrice();
        $(document).on('click', '.btn.remove', function (event) {
        $(this).closest('tr').remove();
        updateTotalPrice();
        });
        let timeout;
        $(document).on('input', 'tr input', function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            updateTotalPrice();
        }, 500);
});

$('#addNewItem').on('submit', function (event) {
    event.preventDefault();
    let name = $(this).children('[name=name]').val();
    let price = $(this).children('[name=price]').val();
    let quantity = $(this).children('[name=quantity]').val();

    $('tbody').append('<tr>' +
        '<td class="items"><input type="text" value="' + name + '" /></td>' +
        '<td class="pricePerUnit"><input type="number" value="' + price + '" /></td>' +
        '<td class="amount"><input type="number" value="' + quantity + '" /></td>' +
        '<td class="pricePerItem"></td>' +
        '<td><button class="btn btn-light btn-lg remove">Remove</button></td>' +
    '</tr>');

    updateTotalPrice();
    $(this).children('[name=name]').val('');
    $(this).children('[name=price]').val('');
    $(this).children('[name=quantity]').val('');
    });
});



