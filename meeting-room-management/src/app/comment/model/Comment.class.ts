import {ErrorType} from './ErrorType.class';
import {User} from './user.class';
import {MeetingRoom} from '../../meeting-room/model/MeetingRoom';

export class Comment {
  get senderName(): User {
    return this._senderName;
  }

  set senderName(value: User) {
    this._senderName = value;
  }
  // tslint:disable-next-line:variable-name
  private _idComment: number;
  // tslint:disable-next-line:variable-name
  private _commentTime: string;
  // tslint:disable-next-line:variable-name
  private _contentComment: string;
  // tslint:disable-next-line:variable-name
  private _contentReply: string;
  // tslint:disable-next-line:variable-name
  private _status: boolean;
  // tslint:disable-next-line:variable-name
  private _statusView: boolean;
  // tslint:disable-next-line:variable-name
  private _errorType: ErrorType;
  // tslint:disable-next-line:variable-name
  private _meetingRoom: MeetingRoom;
  // tslint:disable-next-line:variable-name
  private _replier: User;
  // tslint:disable-next-line:variable-name
  private _sender: User;
  // tslint:disable-next-line:variable-name
  private _senderName: User;
  // tslint:disable-next-line:variable-name
  private _roomName: MeetingRoom;
  // tslint:disable-next-line:variable-name
  private _errorTypeName: ErrorType;

  get errorTypeName(): ErrorType {
    return this._errorTypeName;
  }

  set errorTypeName(value: ErrorType) {
    this._errorTypeName = value;
  }

  get roomName(): MeetingRoom {
    return this._roomName;
  }

  set roomName(value: MeetingRoom) {
    this._roomName = value;
  }

  constructor(idComment: number, commentTime: string, contentComment: string, contentReply: string, status: boolean,
              errorType: ErrorType, meetingRoom: MeetingRoom, replier: User, sender: User) {
    this._idComment = idComment;
    this._commentTime = commentTime;
    this._contentComment = contentComment;
    this._contentReply = contentReply;
    this._status = status;
    this._errorType = errorType;
    this._meetingRoom = meetingRoom;
    this._replier = replier;
    this._sender = sender;
  }

  get idComment(): number {
    return this._idComment;
  }

  set idComment(value: number) {
    this._idComment = value;
  }

  get commentTime(): string {
    return this._commentTime;
  }

  set commentTime(value: string) {
    this._commentTime = value;
  }

  get contentComment(): string {
    return this._contentComment;
  }

  set contentComment(value: string) {
    this._contentComment = value;
  }

  get contentReply(): string {
    return this._contentReply;
  }

  set contentReply(value: string) {
    this._contentReply = value;
  }

  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }

  get errorType(): ErrorType {
    return this._errorType;
  }

  set errorType(value: ErrorType) {
    this._errorType = value;
  }

  get meetingRoom(): MeetingRoom {
    return this._meetingRoom;
  }

  set meetingRoom(value: MeetingRoom) {
    this._meetingRoom = value;
  }

  get statusView(): boolean {
    return this._statusView;
  }

  set statusView(value: boolean) {
    this._statusView = value;
  }

  get replier(): User {
    return this._replier;
  }

  set replier(value: User) {
    this._replier = value;
  }

  get sender(): User {
    return this._sender;
  }

  set sender(value: User) {
    this._sender = value;
  }
}
