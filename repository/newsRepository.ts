import * as mongoose from 'mongoose';
import NewsSchemas from '../models/newsSchema';

export default mongoose.model("news", NewsSchemas);