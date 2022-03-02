 $('tbody tr').each(function (i, ele) {
    console.log($(ele).children().first().text());
  });

  let updatePricePerItem = function (ele) {
    let quantity = parseFloat($(ele).children('.amount').text());
    let pricePerUnit = parseFloat($(ele).children('.pricePerUnit').text().replace(/\$/,""));
    let pricePerItem = quantity * pricePerUnit;
    $(ele).children('.pricePerItem').html('$' + pricePerItem);
    return pricePerItem;
}



let updateTotalPrice = function () {
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
    $('.btn.remove').on('click', function (event) {
    $(this).closest('tr').remove();
    updateTotalPrice();
  });
});



