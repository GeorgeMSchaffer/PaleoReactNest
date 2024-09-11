#Create a container, map its MSSQL files to a local drive, by using port 21443 and either localhost or IP of the container
sudo docker run -e "ACCEPT_EULA=Y" --name mssql -e "MSSQL_SA_PASSWORD=rsbr220Sql!" -p 1433:1433 -v  /Users/gms/code/sql_server/:/var/opt/mssql -d mcr.microsoft.com/mssql/server:2017-latest

docker run -e "ACCEPT_EULA=Y" --name mssql2 -e "MSSQL_SA_PASSWORD=rsbr220Sql" -p 1433:1433 -v  /User/gms/code/sql_server/:/var/opt/mssql -d mcr.microsoft.com/mssql/server:2017-latest
#Thrash ALL docker containers rm $(docker) or just inactive ones rm $(docker ps -a -q)
#example copy of backup files docker cp D:\Docker\digital_destination_audit2017.bak 8617cc9fab1b:/var/opt/mssql/data/
docker run -e "ACCEPT_EULA=Y" --name mssql -e "MSSQL_SA_PASSWORD=rsbr220Sql!" -p 21433:1433 -v  D:\\code\\csv-bulk-loader\\sql\\:/var/opt/mssql -d mcr.microsoft.com/mssql/server:2017-latest

#Example restore DB script
RESTORE DATABASE [digital_destination_audit]
FROM DISK = N'/var/opt/mssql/data/digital_destination_audit.bak'
WITH FILE = 1,
MOVE N'digital_destination_audit' TO N'/var/opt/mssql/data/digital_destination_audit.mdf',
MOVE N'digital_destination_audit_log' TO N'/var/opt/mssql/data/digital_destination_audit_log.ldf',
NOUNLOAD, STATS = 5
GO
RESTORE DATABASE [digital_destination_audit]
FROM DISK = N'/var/opt/mssql/data/digital_destination_audit-Full.bak'
WITH FILE = 1,
MOVE N'WWI_Primary' TO N'/var/opt/mssql/data/digital_destination_audit.mdf',
MOVE N'WWI_UserData' TO N'/var/opt/mssql/data/digital_destination_audit_UserData.ndf',
MOVE N'WWI_Log' TO N'/var/opt/mssql/data/digital_destination_audit.ldf',
MOVE N'WWI_InMemory_Data_1' TO N'/var/opt/mssql/data/digital_destination_audit_InMemory_Data_1',
NOUNLOAD, STATS = 5
GO``