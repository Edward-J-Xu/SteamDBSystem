module.exports = (sequelize, DataTypes) => {
    // Create Table
    const Comments = sequelize.define("Comments", {
        comment_body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Comments;
};
