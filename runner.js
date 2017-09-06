var inputData =[];
var circSize;
var divisorForStrengthToX = 40;

var main = () => {
  inputData = generateTrash(20);
  circSize = 20;
  console.log(JSON.stringify(inputData));

  var dataPoints = d3.select('#key').selectAll("div").data(locations).enter().append("div")
    .text((d) => d).attr('class', 'keyBit').style('background-color', (d) => originToColor(d))
    .style('color', 'white').style('text-shadow', '2px 2px black');


  var dataPoints = d3.select('#scrollbox').selectAll("g").data(inputData).enter().append("g");
  dataPoints.append("circle")
    .attr('r', circSize).style('fill', (d) => originToColor(d.origin)).attr('class', 'element')
    .style('opacity', (d) => d.strength/100).transition().duration(300)
    .attr('transform', (d) => 'translate(' + d.worth/divisorForStrengthToX + ', 50)');
  dataPoints.append("text")
    .text((d) => `${d.name} (str:${d.strength})`)
    .style('font-size', '8px').style('font-family', 'verdana')
    .transition().duration(300).attr('z-index', 1)
    .attr('transform', (d) => 'translate(' + d.worth/divisorForStrengthToX + ', 50)')
    .transition().duration(200).attr('transform',  (d) => 'translate(' + d.worth/divisorForStrengthToX + ', 30) rotate(90)');
};

var colorIndex = {};
colorIndex['Acarime'] = '1a60da';
colorIndex['Alon'] = '1acbda';
colorIndex['Lugera'] = '16e882';
colorIndex['Karrier\s Fort'] = '835415';
colorIndex['Ialesys'] = 'eca444';
colorIndex['Amina'] = 'fff059';
colorIndex['Relinq'] = 'c19e77';
colorIndex['Belwood'] = '72b210';

var originToColor = (d) => {
  return '#' + colorIndex[d];
};

var generateTrash = (n) => {
  var i = 0;
  var result = [];
  while (i < n) {
    result.push(assembleEquipment());
    i++;
  }
  return result;
}



var part1 = ['Desert', 'Oceanic', 'Solar', 'Sky', 'Far', 'Earthen', 'Luminant', 'Bone', 'Cleaving', 'Fiery', 'Frozen', 'Devastating', 'Terrifying', 'Grim', 'Foul', 'Janky', 'Terrible', 'Awesome',
  'Godlike', 'Holy', 'Unholy', 'Crude', 'Deathly', 'Arrogant', 'Refined', 'Graceful', 'Resolute', 'Gleaming', 'Ordinant', 'Lawful', 'Chaotic', 'Aquatic', 'Dusty', 'Demonic', 'Angelic',
  'Volcanic', 'Crystal', 'Shitty', 'Icy', 'Nordic', 'Oriental', 'Forsaken', 'Bloody', 'Haunted', 'Cursed', 'Old', 'Trusty'];
var part2 = ['Beater', 'Slicer', 'Splitter', 'Blade', 'Axe', 'Waraxe', 'Halberd', 'Spear', 'Sword', 'Zweihander', 'Morningstar', 'Mace', 'Flail', 'Knuckle', 'Club', 'Launcher', 'Longbow',
  'Horsebow', 'Recurve', 'Rapier', 'Sidearm', 'Revolver', 'Handcannon', 'Scythe', 'Bleeder', 'Dagger', 'Knife', 'Javelin', 'Hook', 'Heirloom', 'Musket', 'Dirk', 'Main Gauche', 'Staff',
  'Wand', 'Lance', 'Bec de Corbin', 'Hammer', 'Warhammer', 'Maul'];
var part3 = ['Terror', 'Grimness', 'Dusk', 'Ancient Lords', 'Heaven', 'Hell', 'Romance', 'Justice', 'Light', 'Darkness', 'Reaper', 'Dominance', 'Absolution', 'Bloodlust', 'Vengeance', 'Corniness',
  'Metal', 'Death', 'Great Punishment', 'Fortune', 'Sloth', 'Lust', 'Deep Depths', 'Howling Winds', 'Deepest Caves'];
var locations = ['Acarime', 'Alon', 'Lugera', 'Karrier\s Fort', 'Ialesys', 'Amina', 'Relinq', 'Belwood'];

var assembleEquipment = function() {
  var result = {};
  var name = '';

  //Generate a name
  name += part1[Math.floor(Math.random() * part1.length)];
  name += ' ' + part2[Math.floor(Math.random() * part2.length)];
  if (name.length <= 10) {
    name += ' of ' + part3[Math.floor(Math.random() * part3.length)];
  }
  result.name = name;

  //Generate a strength property
  result.strength = Math.floor(Math.random() * 100);
  result.worth = result.strength * 300 + 100;
  result.origin = locations[Math.floor(Math.random() * locations.length)];

  return result;
}

main();
