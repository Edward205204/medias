import databaseService from '~/services/databases.services';

export const connectDb = async () => {
  try {
    await databaseService.connect();
    await databaseService.initIndexes();
  } catch (error) {
    console.log('Error ', error);
    process.exit(1);
  }
};
