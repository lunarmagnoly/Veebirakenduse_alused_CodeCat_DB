import sql from "mssql/msnodesqlv8";

const dbConfig: sql.config = {
  connectionString:
    "Driver={ODBC Driver 17 for SQL Server};Server=localhost,57239;Database=CodeCatDB;Trusted_Connection=Yes;TrustServerCertificate=Yes;",
  driver: "msnodesqlv8",
};

export default dbConfig;