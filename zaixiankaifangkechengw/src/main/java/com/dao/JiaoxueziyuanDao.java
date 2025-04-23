package com.dao;

import com.entity.JiaoxueziyuanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.view.JiaoxueziyuanView;

/**
 * 教学资源 Dao 接口
 *
 * @author 
 */
public interface JiaoxueziyuanDao extends BaseMapper<JiaoxueziyuanEntity> {

   List<JiaoxueziyuanView> selectListView(Pagination page,@Param("params")Map<String,Object> params);

}
