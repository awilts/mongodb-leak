module.exports = async () => {
    await global['mongoServer'].stop(true);
};

