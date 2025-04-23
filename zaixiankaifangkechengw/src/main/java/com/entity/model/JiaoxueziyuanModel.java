package com.entity.model;

import com.entity.JiaoxueziyuanEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;
import java.io.Serializable;


/**
 * 教学资源
 * 接收传参的实体类
 *（实际开发中配合移动端接口开发手动去掉些没用的字段， 后端一般用entity就够用了）
 * 取自ModelAndView 的model名称
 */
public class JiaoxueziyuanModel implements Serializable {
    private static final long serialVersionUID = 1L;




    /**
     * 主键
     */
    private Integer id;


    /**
     * 资源标题
     */
    private String jiaoxueziyuanName;


    /**
     * 资源类型
     */
    private Integer jiaoxueziyuanTypes;


    /**
     * 资源图片
     */
    private String jiaoxueziyuanPhoto;


    /**
     * 资源视频
     */
    private String jiaoxueziyuanVideo;


    /**
     * 课件下载
     */
    private String jiaoxueziyuanFile;


    /**
     * 资源教师
     */
    private Integer jiaoshiId;


    /**
     * 资源详情
     */
    private String jiaoxueziyuanContent;


    /**
     * 发布时间
     */
    @JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
    private Date insertTime;


    /**
     * 创建时间 show1 show2 photoShow
     */
    @JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
    private Date createTime;


    /**
	 * 获取：主键
	 */
    public Integer getId() {
        return id;
    }


    /**
	 * 设置：主键
	 */
    public void setId(Integer id) {
        this.id = id;
    }
    /**
	 * 获取：资源标题
	 */
    public String getJiaoxueziyuanName() {
        return jiaoxueziyuanName;
    }


    /**
	 * 设置：资源标题
	 */
    public void setJiaoxueziyuanName(String jiaoxueziyuanName) {
        this.jiaoxueziyuanName = jiaoxueziyuanName;
    }
    /**
	 * 获取：资源类型
	 */
    public Integer getJiaoxueziyuanTypes() {
        return jiaoxueziyuanTypes;
    }


    /**
	 * 设置：资源类型
	 */
    public void setJiaoxueziyuanTypes(Integer jiaoxueziyuanTypes) {
        this.jiaoxueziyuanTypes = jiaoxueziyuanTypes;
    }
    /**
	 * 获取：资源图片
	 */
    public String getJiaoxueziyuanPhoto() {
        return jiaoxueziyuanPhoto;
    }


    /**
	 * 设置：资源图片
	 */
    public void setJiaoxueziyuanPhoto(String jiaoxueziyuanPhoto) {
        this.jiaoxueziyuanPhoto = jiaoxueziyuanPhoto;
    }
    /**
	 * 获取：资源视频
	 */
    public String getJiaoxueziyuanVideo() {
        return jiaoxueziyuanVideo;
    }


    /**
	 * 设置：资源视频
	 */
    public void setJiaoxueziyuanVideo(String jiaoxueziyuanVideo) {
        this.jiaoxueziyuanVideo = jiaoxueziyuanVideo;
    }
    /**
	 * 获取：课件下载
	 */
    public String getJiaoxueziyuanFile() {
        return jiaoxueziyuanFile;
    }


    /**
	 * 设置：课件下载
	 */
    public void setJiaoxueziyuanFile(String jiaoxueziyuanFile) {
        this.jiaoxueziyuanFile = jiaoxueziyuanFile;
    }
    /**
	 * 获取：资源教师
	 */
    public Integer getJiaoshiId() {
        return jiaoshiId;
    }


    /**
	 * 设置：资源教师
	 */
    public void setJiaoshiId(Integer jiaoshiId) {
        this.jiaoshiId = jiaoshiId;
    }
    /**
	 * 获取：资源详情
	 */
    public String getJiaoxueziyuanContent() {
        return jiaoxueziyuanContent;
    }


    /**
	 * 设置：资源详情
	 */
    public void setJiaoxueziyuanContent(String jiaoxueziyuanContent) {
        this.jiaoxueziyuanContent = jiaoxueziyuanContent;
    }
    /**
	 * 获取：发布时间
	 */
    public Date getInsertTime() {
        return insertTime;
    }


    /**
	 * 设置：发布时间
	 */
    public void setInsertTime(Date insertTime) {
        this.insertTime = insertTime;
    }
    /**
	 * 获取：创建时间 show1 show2 photoShow
	 */
    public Date getCreateTime() {
        return createTime;
    }


    /**
	 * 设置：创建时间 show1 show2 photoShow
	 */
    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    }
