package com.entity.view;

import com.entity.HuidaEntity;
import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.util.Date;

/**
 * 回答
 * 后端返回视图实体辅助类
 * （通常后端关联的表或者自定义的字段需要返回使用）
 */
@TableName("huida")
public class HuidaView extends HuidaEntity implements Serializable {
    private static final long serialVersionUID = 1L;

		/**
		* 批改状态的值
		*/
		private String huidaValue;



		//级联表 yonghu
			/**
			* 学生姓名
			*/
			private String yonghuName;
			/**
			* 头像
			*/
			private String yonghuPhoto;
			/**
			* 联系方式
			*/
			private String yonghuPhone;
			/**
			* 学生身份证号
			*/
			private String yonghuIdNumber;
			/**
			* 邮箱
			*/
			private String yonghuEmail;
			/**
			* 假删
			*/
			private Integer yonghuDelete;

		//级联表 zuoye
			/**
			* 作业 的 教师
			*/
			private Integer zuoyeJiaoshiId;
			/**
			* 作业唯一编号
			*/
			private String zuoyeUuidNumber;
			/**
			* 作业名称
			*/
			private String zuoyeName;
			/**
			* 作业类型
			*/
			private Integer zuoyeTypes;
				/**
				* 作业类型的值
				*/
				private String zuoyeValue;
			/**
			* 作业文件
			*/
			private String zuoyeFile;
			/**
			* 作业详情
			*/
			private String zuoyeContent;

	public HuidaView() {

	}

	public HuidaView(HuidaEntity huidaEntity) {
		try {
			BeanUtils.copyProperties(this, huidaEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}



			/**
			* 获取： 批改状态的值
			*/
			public String getHuidaValue() {
				return huidaValue;
			}
			/**
			* 设置： 批改状态的值
			*/
			public void setHuidaValue(String huidaValue) {
				this.huidaValue = huidaValue;
			}









































				//级联表的get和set yonghu

					/**
					* 获取： 学生姓名
					*/
					public String getYonghuName() {
						return yonghuName;
					}
					/**
					* 设置： 学生姓名
					*/
					public void setYonghuName(String yonghuName) {
						this.yonghuName = yonghuName;
					}

					/**
					* 获取： 头像
					*/
					public String getYonghuPhoto() {
						return yonghuPhoto;
					}
					/**
					* 设置： 头像
					*/
					public void setYonghuPhoto(String yonghuPhoto) {
						this.yonghuPhoto = yonghuPhoto;
					}

					/**
					* 获取： 联系方式
					*/
					public String getYonghuPhone() {
						return yonghuPhone;
					}
					/**
					* 设置： 联系方式
					*/
					public void setYonghuPhone(String yonghuPhone) {
						this.yonghuPhone = yonghuPhone;
					}

					/**
					* 获取： 学生身份证号
					*/
					public String getYonghuIdNumber() {
						return yonghuIdNumber;
					}
					/**
					* 设置： 学生身份证号
					*/
					public void setYonghuIdNumber(String yonghuIdNumber) {
						this.yonghuIdNumber = yonghuIdNumber;
					}

					/**
					* 获取： 邮箱
					*/
					public String getYonghuEmail() {
						return yonghuEmail;
					}
					/**
					* 设置： 邮箱
					*/
					public void setYonghuEmail(String yonghuEmail) {
						this.yonghuEmail = yonghuEmail;
					}

					/**
					* 获取： 假删
					*/
					public Integer getYonghuDelete() {
						return yonghuDelete;
					}
					/**
					* 设置： 假删
					*/
					public void setYonghuDelete(Integer yonghuDelete) {
						this.yonghuDelete = yonghuDelete;
					}


				//级联表的get和set zuoye

					/**
					* 获取：作业 的 教师
					*/
					public Integer getZuoyeJiaoshiId() {
						return zuoyeJiaoshiId;
					}
					/**
					* 设置：作业 的 教师
					*/
					public void setZuoyeJiaoshiId(Integer zuoyeJiaoshiId) {
						this.zuoyeJiaoshiId = zuoyeJiaoshiId;
					}


					/**
					* 获取： 作业唯一编号
					*/
					public String getZuoyeUuidNumber() {
						return zuoyeUuidNumber;
					}
					/**
					* 设置： 作业唯一编号
					*/
					public void setZuoyeUuidNumber(String zuoyeUuidNumber) {
						this.zuoyeUuidNumber = zuoyeUuidNumber;
					}

					/**
					* 获取： 作业名称
					*/
					public String getZuoyeName() {
						return zuoyeName;
					}
					/**
					* 设置： 作业名称
					*/
					public void setZuoyeName(String zuoyeName) {
						this.zuoyeName = zuoyeName;
					}

					/**
					* 获取： 作业类型
					*/
					public Integer getZuoyeTypes() {
						return zuoyeTypes;
					}
					/**
					* 设置： 作业类型
					*/
					public void setZuoyeTypes(Integer zuoyeTypes) {
						this.zuoyeTypes = zuoyeTypes;
					}


						/**
						* 获取： 作业类型的值
						*/
						public String getZuoyeValue() {
							return zuoyeValue;
						}
						/**
						* 设置： 作业类型的值
						*/
						public void setZuoyeValue(String zuoyeValue) {
							this.zuoyeValue = zuoyeValue;
						}

					/**
					* 获取： 作业文件
					*/
					public String getZuoyeFile() {
						return zuoyeFile;
					}
					/**
					* 设置： 作业文件
					*/
					public void setZuoyeFile(String zuoyeFile) {
						this.zuoyeFile = zuoyeFile;
					}

					/**
					* 获取： 作业详情
					*/
					public String getZuoyeContent() {
						return zuoyeContent;
					}
					/**
					* 设置： 作业详情
					*/
					public void setZuoyeContent(String zuoyeContent) {
						this.zuoyeContent = zuoyeContent;
					}




}
