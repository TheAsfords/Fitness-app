var KEY = 'fitness-log';
var items = [];
try { items = JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) {}
function draw() {
  var ul = document.getElementById('list'), total = 0;
  ul.textContent = '';
  items.forEach(function (it) {
    total += it.mins;
    var li = document.createElement('li');
    li.textContent = it.ex + ' - ' + it.mins + ' min';
    ul.appendChild(li);
  });
  document.getElementById('total').textContent = total;
}
document.getElementById('f').addEventListener('submit', function (e) {
  e.preventDefault();
  items.push({ ex: document.getElementById('ex').value, mins: Number(document.getElementById('mins').value) });
  try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) {}
  draw();
});
draw();
