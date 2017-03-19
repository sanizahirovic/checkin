/* * * ./app/comments/model/comment.ts * * */
export class Log {
    constructor(
        public checkin: Date,
        public checkout:Date,
        public user_email : string
        ){}
}
