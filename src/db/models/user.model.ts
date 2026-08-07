import { Prop, Schema, SchemaFactory, Virtual } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserGender, UserRole } from 'src/common/Enums/user.enum';

export type UserDocument = HydratedDocument<User>;

@Schema({
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
})
export class User {
    @Prop({ type: String })
    firstName!: string;

    @Prop({ type: String })
    lastName!: string;

    @Prop({ type: String, required: true, unique: true })
    email!: string;

    @Prop({type :String, required: true})
    phone!: string;

    @Prop({ type: String })
    profilePic?: string;

    @Prop({ type: String, required: true, enum: UserGender })
    gender!: UserGender;

    @Prop({
    type: String,
    required: true,
    default: UserRole.USER,
    enum: UserRole,
    })
    role!: UserRole;


    @Prop({ type: String, required: true })
    password!: string;

    @Virtual({
        set(this: User, value: any) {
            const [firstName, lastName] = value.split(' ');
            this.firstName = firstName;
            this.lastName = lastName;
    },
    get(this: User) {
        return `${this.firstName} ${this.lastName}`;
    },
})
userName!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
