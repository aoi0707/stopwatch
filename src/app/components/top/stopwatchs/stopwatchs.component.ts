import { Component, OnInit } from '@angular/core';

export interface StopwatchsComponents {
  // ブラウザ表示用（分）
  minutes: string;
  // ブラウザ表示用（秒）
  seconds: string;
  // ブラウザ表示用（ミリ秒）
  milli_seconds: string;
  // ストップウォッチを動かすときに用いるsetIntervalの返り値（START）
  timer_id: number;
  // ストップウォッチを動かし始めてからの時間
  stopwatch_time: number;
  // STARTボタンを押した時間
  press_start_time: number;
  //ストップウォッチが動いていた時間の合計（STARTボタンを押してからSTOPボタンを押すまでの時間の合計）
  past_moving_time: number;
  // STOPボタンを押した時間
  press_stop_time: number;
  // 計算した分を格納
  time_minutes: string;
  // 計算した秒を格納
  time_seconds: string;
  // 計算したミリ秒を格納
  time_milli_seconds: string;
  // スタートボタンをストップボタンに変更する変数
  starts: string;

  // ------RAP時に使用する変数-------------
  // RAPボタンを押した時間
  press_rap_time: number;
  press_rap_times: number;
  // ストップウォッチを動かすときに用いるsetIntervalの返り値(RAP）
  timer_ids: number;
  // ラップボタンを押したときに表示されるtotalの分、秒、ミリ秒
  rapMinutes: string;
  rapSeconds: string;
  rapMilli_seconds: string;
  // ストップウォッチを動かし始めてからの時間
  stopwatch_times: number;
  // RAPタイムを格納
  rapTime: string;
  // カウント変数
  rapNumber: number;
  // disabledで有効・無効の変数
  rapButtons: any;
  resetButtons: any;
  // 起動変数
  timerStart: any;
  timerStartStops: any;
}
@Component({
  selector: 'app-stopwatchs',
  templateUrl: './stopwatchs.component.html',
  styleUrls: ['./stopwatchs.component.scss'],
})
export class StopwatchsComponent implements OnInit {
  //スタート時の分、秒、ミリ秒
  minutes = '00';
  seconds = '00';
  milli_seconds = '00';
  // ラップボタンを押したときに表示されるtotalの分、秒、ミリ秒
  rapMinutes = '00';
  rapSeconds = '00';
  rapMilli_seconds = '00';
  // ストップウォッチを動かすときに用いるsetIntervalの返り値（スタート）
  timer_id: any;
  // ストップウォッチを動かすときに用いるsetIntervalの返り値（ラップ）
  timer_ids: any;
  // ストップウォッチを動かし始めてからの時間
  stopwatch_time = 0;
  stopwatch_times = 0;
  // STARTボタンを押した時間
  press_start_time = 0;
  // STOPボタンを押した時間
  press_stop_time = 0;
  // RAPボタンを押した時間（最初）
  press_rap_time = 0;
  // RAPボタンを押した時間（次）
  press_rap_times = 0;

  //ストップウォッチが動いていた時間の合計（STARTボタンを押してからSTOPボタンを押すまでの時間の合計）
  past_moving_time = 0;
  // RAPボタンを押してから次のRAPボタンを押すまでの時間
  past_moving_times = 0;

  // 分、秒、ミリ秒
  time_milli_seconds: any;
  time_seconds: any;
  time_minutes: any;

  // スタートボタンをストップボタンに変更する変数
  starts = 'Start';

  // disabledで有効・無効の変数
  rapButtons = true; //非活性（初期値）
  resetButtons = true; //非活性（初期値）

  // 起動変数
  timerStart = false;
  timerStartStops = true;

  // ラップ一覧格納変数
  rapTime: any;
  rapNumber = 0;
  total: any;
  datas: any = [];

  startStop() {
    if (this.timerStartStops) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }
  // スタートボタンの処理関数
  startTimer() {
    this.rapButtons = false; //活性
    this.timerStart = true; //起動変数
    this.timerStartStops = false; //起動変数

    this.press_start_time = new Date().getTime();
    this.timer_id = setInterval(() => {
      this.stopwatch_time =
        new Date().getTime() - this.press_start_time + this.past_moving_time;

      // 分、秒、ミリ秒の計算エリア
      this.time_milli_seconds = `00${Math.floor(
        (this.stopwatch_time % 1000) / 10
      )}`.slice(-2);
      this.time_seconds = `0${Math.floor(
        (this.stopwatch_time / 1000) % 60
      )}`.slice(-2);
      this.time_minutes = `0${
        Math.floor(this.stopwatch_time / 1000 / 60) % 60
      }`.slice(-2);
      //ブラウザに時間を描画する
      this.minutes = this.time_minutes;
      this.seconds = this.time_seconds;
      this.milli_seconds = this.time_milli_seconds;
    }, 1);
    this.starts =
      "<button class='button' id='start' (click)='startTimer()'>Stop</button>";
  }
  // ストップボタンの処理関数
  stopTimer() {
    this.timerStartStops = true; //起動変数
    if (this.timerStart) {
      clearInterval(this.timer_id);
      this.starts =
        "<button class='button' id='start' (click)='startTimer()'>Start</button>";
      this.press_stop_time = new Date().getTime();
      this.past_moving_time += this.press_stop_time - this.press_start_time;
    }

    this.rapButtons = true; //RAPボタンを非活性
    this.resetButtons = false; //resetボタン活性
  }
  // リセットボタンの処理関数
  resetTimer() {
    clearInterval(this.timer_id);

    //ブラウザの表示を初期化
    this.minutes = '00';
    this.seconds = '00';
    this.milli_seconds = '00';

    //変数を初期化
    this.stopwatch_time = 0;
    this.press_start_time = 0;
    this.press_stop_time = 0;
    this.past_moving_time = 0;
    this.rapTime = '';
    this.rapNumber = 0;
    this.total = '';
    this.resetButtons = true;
    this.datas = [];
  }
  // ラップボタンの処理関数
  rapTimer() {
    this.press_rap_time = new Date().getTime();
    this.press_rap_times = new Date().getTime();

    this.past_moving_times += this.press_rap_times - this.press_rap_time;
    this.timer_ids = setInterval(() => {
      this.stopwatch_times =
        new Date().getTime() - this.press_rap_time + this.past_moving_times;

      // 分、秒、ミリ秒の計算エリア
      this.time_milli_seconds = `00${Math.floor(
        (this.stopwatch_times % 1000) / 10
      )}`.slice(-2);
      this.time_seconds = `0${Math.floor(
        (this.stopwatch_times / 1000) % 60
      )}`.slice(-2);
      this.time_minutes = `0${
        Math.floor(this.stopwatch_times / 1000 / 60) % 60
      }`.slice(-2);

      //ブラウザに時間を描画する
      this.rapMinutes = this.time_minutes;
      this.rapSeconds = this.time_seconds;
      this.rapMilli_seconds = this.time_milli_seconds;
    }, 1);
    // RAPの時間を格納
    this.rapTime = this.minutes + ':' + this.seconds + '.' + this.milli_seconds;
    // RAPの合計（スプリット）を格納
    this.total =
      this.rapMinutes + ':' + this.rapSeconds + '.' + this.rapMilli_seconds;
    // RAPカウント
    this.rapNumber++;

    // オブジェクトを作成
    const rapObj = {
      index: 0,
      time: ' ',
      totals: ' ',
    };
    // rapObj.indexにrapNumberを格納
    rapObj.index = this.rapNumber;
    //  rapObj.timeにrapTimeを格納
    rapObj.time = this.rapTime;
    // rapObj.totalsにtotalを格納
    rapObj.totals = this.total;
    // this.datas(空配列)にrapObjをプッシュ
    this.datas.push(rapObj);
  }

  constructor() {}
  ngOnInit(): void {}
}
