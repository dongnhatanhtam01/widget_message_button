function Student(_id, _name, _email, _kind, mScore, pScore, scheScore, trainingScore) {
 this.mScore = mScore;
 this.pScore = pScore;
 this.scheScore = scheScore;
 this.trainingScore = trainingScore;

 var _rating='';
 var _occupation='';

 var _id = _id;
 var _name = _name;
 var _email = _email;
 var _kind = _kind;

 this.setInfo = function (_id, _name, _email, _kind) {
  _id = _id;
  _name = _name;
  _email = _email;
  _kind = _kind;
 }

 this.getInfo = function () {
  return [_id, _name, _email, _kind];
 }

 // Xử lý tình trạng kinh tế - Enum Occupation Global

 this.setOccupation = function (_kind) {
   console.log(_kind);
  if (parseFloat(_kind) === OccupationType.hoNgheo) { _occupation = "Hộ nghèo"};
  if (parseFloat(_kind) === OccupationType.hoBt) { _occupation = "Hộ Khá Dã"};
  if (parseFloat(_kind) === OccupationType.hoGiau) { _occupation = "Hộ Giàu"};
 }

 this.getOccupation = function () {
  return [_occupation]; 
 }

}


Student.prototype.spillSecret = function () {
 console.log(this.getInfo());
 console.log(this.getOccupation());
}

Student.prototype.averagePoint = function () {
 return ((this.mScore + this.pScore + this.scheScore) / 3).toFixed(2);
}


