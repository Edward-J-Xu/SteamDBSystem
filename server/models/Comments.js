module.exports = (sequelize, DataTypes) => {
    // Create Table
    const Comments = sequelize.define("Comments", {
        commentBody: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Comments;
};
