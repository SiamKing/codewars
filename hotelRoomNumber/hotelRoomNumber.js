function roomNumber(realFloor,totalRooms){
  var floorArr = [...Array(realFloor).keys()],
      floorWithRoom,
      floor,
      rooms = [],
      room,
      i = 0;

  floorArr.shift();
  floorArr.push(realFloor);

  while (i < realFloor) {
    floor = floorArr[i].toString();
    if (floor.includes(4) || floor.includes(13) || floor.includes(18)) {
      floorArr.push(floorArr[floorArr.length - 1] + 1);
      realFloor++;
    }
    i++;
  }

  floorWithRoom = totalRooms >= 80 ? realFloor.toString() + '001' : realFloor.toString() + '01';
  room = totalRooms >= 80 ? '001' : '01';
  i = 1

  while (i <= totalRooms) {
    if (room.includes(4) || room.includes(13)) {
      totalRooms += 1;
    } else {
      rooms.push(floorWithRoom);
    }
    floorWithRoom = (~~floorWithRoom + 1).toString();
    room = (~~room + 1).toString();
    i++;
  }

  return rooms;
}
