import mongoose from 'mongoose';

const provinceSchema = new mongoose.Schema({
  // 省份名称
  provinceName: String,

  // 省份编码
  provinceCode: Number,

  // 省份 id
  id: Number
});

provinceSchema.index({ id: 1 });

const Province = mongoose.model('province', provinceSchema, 'province');

export default Province;