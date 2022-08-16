USE master
GO
IF NOT EXISTS (
 SELECT name
 FROM sys.databases
 WHERE name = N'InstagramDB'
)

CREATE DATABASE [InstagramDB];
GO
IF SERVERPROPERTY('ProductVersion') > '12'
 ALTER DATABASE [InstagramDB] SET QUERY_STORE=ON;
GO

--------------------------------------------------
-- Create a new table called 'User' in schema 'dbo'
-- Drop the table if it already exists
IF OBJECT_ID('dbo.UserInfo', 'U') IS NOT NULL
 DROP TABLE dbo.UserInfo;
GO
-- Create the table in the specified schema
CREATE TABLE dbo.UserInfo
(
 UserId int IDENTITY(1,1) NOT NULL PRIMARY KEY,
 Username nvarchar(50) NOT NULL,
 Password nvarchar(50) NOT NULL,
);
GO

--------------------------------------------------
IF OBJECT_ID('save_data') IS NOT NULL
BEGIN 
DROP PROC save_data 
END
GO
CREATE PROCEDURE save_data
	   @Username varchar(20),
	   @Password varchar(20) 
AS
BEGIN
IF EXISTS (SELECT * FROM UserInfo WHERE UserInfo.Username = @Username)
    BEGIN
        PRINT 'This data has already been saved';
        RETURN 0;
    END
ELSE
    BEGIN
        INSERT INTO UserInfo (
            [Username],
            [Password])
        VALUES (
            @Username,
            @Password)

        DECLARE @UserId INT;
        SET @UserId = SCOPE_IDENTITY()
        PRINT 'Successfully added!';
        RETURN 1;
    END
END


------------------------------
EXECUTE save_data
    @Username = "mojtaba.hashemip",
    @Password = "m.h4400255761"


-------------------------------
DELETE FROM [dbo].[UserInfo]