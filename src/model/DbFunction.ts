// import fs from 'fs'
// import { Global } from "./Global";
// import { Document, Filter, FindCursor, FindOptions, WithId } from 'mongodb';

// export default class DbFunction {



//   /**
//    * @description: 将数据,写入到本地文件中
//    */
//   private static writeDataToLocalFile(fileName: string, data: any) {
//     // 本地文件存放路径
//     const dir = 'temp/'
//     fs.writeFileSync(dir + fileName, JSON.stringify(data));
//   }



//   /**
//    * @description: Find
//    */
//   static find(filter: Filter<Document> FindOptions): FindCursor<WithId<Document>> {

//     const fileName = 'sql_find.txt'
//     // 将查询条件记录到本地文件中
//     try {
//       this.writeDataToLocalFile(fileName, filter);

//     } catch (error) {
//       console.log('[DbFunction find 写入本地文件失败]:', error)
//     }

//     return Global._db.collection(col).find(filter, options);

//   }

//   /**
//    * @description: FindOne
//    */
//   static findOne(filter: T) {
//     const fileName = 'sql_findOne.txt'

//     // 将查询条件记录到本地文件中
//     try {
//       this.writeDataToLocalFile(fileName, filter);

//     } catch (error) {
//       console.log('[DbFunction findOne 写入本地文件失败]:', error)
//     }

//     return Global._db.collection(col).findOne(condition);

//   }


//   /**
//    * @description: InsertOne
//    */
//   static insertOne(filter: Filter<Document>) {
//     const fileName = 'sql_insertOne.txt'

//     // 将查询条件记录到本地文件中
//     try {
//       this.writeDataToLocalFile(fileName, filter);

//     } catch (error) {
//       console.log('[DbFunction insertOne 写入本地文件失败]:', error)
//     }

//     return Global._db.collection(col).insertOne(filter);

//   }

//   /**
//    * @description: InsertMany
//    */
//   static insertMany(filter: Filter<Document>) {
//     const fileName = 'sql_insertMany.txt'

//     // 将查询条件记录到本地文件中
//     try {
//       this.writeDataToLocalFile(fileName, data);

//     } catch (error) {
//       console.log('[DbFunction insertMany 写入本地文件失败]:', error)
//     }

//     return Global._db.collection(col).insertMany(data);

//   }


//   /**
//    * @description: UpdateOne
//    */
//   static updateOne(condition: any, filter: Filter<Document>) {
//     const fileName = 'sql_updateOne.txt'

//     // 将查询条件记录到本地文件中
//     try {
//       this.writeDataToLocalFile(fileName, filter);

//     } catch (error) {
//       console.log('[DbFunction updateOne 写入本地文件失败]:', error)
//     }

//     return Global._db.collection(col).updateOne(condition, data);

//   }

//   /**
//    * @description: UpdateMany
//    */
//   static updateMany(condition: any, filter: Filter<Document>) {
//     const fileName = 'sql_updateMany.txt'

//     // 将查询条件记录到本地文件中
//     try {
//       this.writeDataToLocalFile(fileName, filter);

//     } catch (error) {
//       console.log('[DbFunction updateMany 写入本地文件失败]:', error)
//     }

//     return Global._db.collection(col).updateMany(condition, data);
//   }


//   /**
//    * @description: deleteOne
//    */
//   static deleteOne(filter: T) {
//     const fileName = 'sql_deleteOne.txt'

//     // 将查询条件记录到本地文件中
//     try {
//       this.writeDataToLocalFile(fileName, filter);

//     } catch (error) {
//       console.log('[DbFunction deleteOne 写入本地文件失败]:', error)
//     }

//     return Global._db.collection(col).deleteOne(condition);

//   }

//   /**
//    * @description: deleteMany
//    */

//   static deleteMany(filter: T) {
//     const fileName = 'sql_deleteMany.txt'

//     // 将查询条件记录到本地文件中
//     try {
//       this.writeDataToLocalFile(fileName, filter);

//     } catch (error) {
//       console.log('[DbFunction deleteMany 写入本地文件失败]:', error)
//     }

//     return Global._db.collection(col).deleteMany(condition);

//   }

//   /**
//    * @description: FindOneAndUpdate
//    */
//   static findOneAndUpdate(condition: any, filter: Filter<Document>) {
//     const fileName = 'sql_findOneAndUpdate.txt'

//     // 将查询条件记录到本地文件中
//     try {
//       this.writeDataToLocalFile(fileName, filter);

//     } catch (error) {
//       console.log('[DbFunction findOneAndUpdate 写入本地文件失败]:', error)
//     }

//     return Global._db.collection(col).findOneAndUpdate(condition, data);
//   }


//   /**
//    * @description: FindOneAndDelete 
//    */
//   static findOneAndDelete(filter: T) {
//     const fileName = 'sql_findOneAndDelete.txt'

//     // 将查询条件记录到本地文件中
//     try {
//       this.writeDataToLocalFile(fileName, filter);

//     } catch (error) {
//       console.log('[DbFunction findOneAndDelete 写入本地文件失败]:', error)
//     }

//     return Global._db.collection(col).findOneAndDelete(condition);
//   }

//   /**
//    * @description: FindOneAndReplace
//    */
//   static findOneAndReplace(condition: any, filter: Filter<Document>) {
//     const fileName = 'sql_findOneAndReplace.txt'

//     // 将查询条件记录到本地文件中
//     try {
//       this.writeDataToLocalFile(fileName, filter);

//     } catch (error) {
//       console.log('[DbFunction findOneAndReplace 写入本地文件失败]:', error)
//     }

//     return Global._db.collection(col).findOneAndReplace(condition, data);
//   }


// }