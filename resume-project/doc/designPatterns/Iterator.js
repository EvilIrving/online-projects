// Radio迭代器
class RadioStationIterator {
  constructor(stations) {
    this.stations = stations;
    this.index = 0;
  }

  next() {
    return this.stations[this.index++]; 
  }

  prev() {
    if (this.index > 0) {
      return this.stations[--this.index];
    } else {
      return null;
    }
  }

  current() {
    return this.stations[this.index];
  }

  hasNext() {
    return this.index < this.stations.length;
  }

  // 新增方法
  addStation(station) {
    this.stations.push(station);
  }
}

// 收音机类  
class Radio {
  constructor(stations) {
    this.stations = stations;
    this.iterator = new RadioStationIterator(stations);
  }

  playNext() {
    if (this.iterator.hasNext()) {
      let station = this.iterator.next();
      console.log(`Playing ${station}`);
    }
  }

  playPrev() {
    let prevStation = this.iterator.prev();
    if (prevStation) {
      console.log(`Playing ${prevStation}`);
    } else {
      console.log("Already at first station");
    }
  }

  getCurrentStation() {
    return this.iterator.current();
  }

  addStation(station) {
    this.iterator.addStation(station);
  }
}

// 使用示例
let stations = [93.1, 94.5, 95.7, 98.2];

let radio = new Radio(stations);

radio.playNext(); // 播放 93.1
radio.playNext(); // 播放 94.5
radio.playNext(); // 播放 93.1

console.log(radio.getCurrentStation());

// radio.addStation(99.9);
radio.playPrev();
radio.playPrev();


/* 

// UploadIterator接口
class UploadIterator {
  constructor() { }

  hasNext() {
    throw new Error('hasNext() not implemented');
  }

  next() {
    throw new Error('next() not implemented');
  }
}

// H5上传迭代器
class H5UploadIterator extends UploadIterator {

  constructor() {
    super();
    this.index = 0;
  }

  hasNext() {
    return !!window.FormData;
  }

  next() {
    return new FormDataUpload(this.index++);
  }

}

// Flash上传迭代器
class FlashUploadIterator extends UploadIterator {

  constructor() {
    super();
    this.index = 0;
  }

  hasNext() {
    return !!window.flash;
  }

  next() {
    return new FlashUpload(this.index++);
  }

}

// XObject上传迭代器
class XObjectUploadIterator extends UploadIterator {

  constructor() {
    super();
    this.index = 0;
  }

  hasNext() {
    return !!window.XObject;
  }

  next() {
    return new XObjectUpload(this.index++);
  }

}

// 上传管理器
class UploadManager {

  constructor() {
    this.iterators = [
      new H5UploadIterator(),
      new FlashUploadIterator(),
      new XObjectUploadIterator()
    ];

    this.index = 0;
  }

  upload(file) {
    while (this.index < this.iterators.length) {
      let iterator = this.iterators[this.index++];
      if (iterator.hasNext()) {
        let uploadObj = iterator.next();
        uploadObj.upload(file);
        break;
      }
    }
  }

}

// FormData上传对象
class FormDataUpload {
  constructor(id) {
    this.id = id;
  }

  upload(file) {
    console.log(`FormDataUpload ${this.id} uploading ${file.name}`);
  }
}

// Flash上传对象 
class FlashUpload {
  constructor(id) {
    this.id = id;
  }

  upload(file) {
    console.log(`FlashUpload ${this.id} uploading ${file.name}`);
  }
}

// XObject上传对象
class XObjectUpload {
  constructor(id) {
    this.id = id;
  }

  upload(file) {
    console.log(`XObjectUpload ${this.id} uploading ${file.name}`);
  }
}

// 调用示例
let manager = new UploadManager();
manager.upload({ name: 'test.png' }); 

*/