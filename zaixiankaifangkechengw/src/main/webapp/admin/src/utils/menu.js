const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"资源类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryJiaoxueziyuan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryNews"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"作业类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZuoye"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除"
                        ],
                        "menu":"论坛管理",
                        "menuJump":"列表",
                        "tableName":"forum"
                    }
                ],
                "menu":"论坛管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "批改",
                            "删除"
                        ],
                        "menu":"回答管理",
                        "menuJump":"列表",
                        "tableName":"huida"
                    }
                ],
                "menu":"回答管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"教师管理",
                        "menuJump":"列表",
                        "tableName":"jiaoshi"
                    }
                ],
                "menu":"教师管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"教学资源管理",
                        "menuJump":"列表",
                        "tableName":"jiaoxueziyuan"
                    }
                ],
                "menu":"教学资源管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告信息管理",
                        "menuJump":"列表",
                        "tableName":"news"
                    }
                ],
                "menu":"公告信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"学生管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"学生管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"学生成绩",
			            "menuJump":"列表",
			            "tableName":"xueshengchengji"
			        }
			    ],
			    "menu":"学生成绩"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"作业管理",
                        "menuJump":"列表",
                        "tableName":"zuoye"
                    }
                ],
                "menu":"作业管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"试卷管理",
                        "menuJump":"列表",
                        "tableName":"exampaper"
                    }
                ],
                "menu":"试卷管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"试题管理",
                        "menuJump":"列表",
                        "tableName":"examquestion"
                    }
                ],
                "menu":"试题管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "批改",
                            "删除"
                        ],
                        "menu":"考试记录",
                        "menuJump":"列表",
                        "tableName":"examrecord"
                    },
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"错题本",
                        "menuJump":"列表",
                        "tableName":"examrewrongquestion"
                    }
                ],
                "menu":"考试管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "删除"
	                    ],
	                    "menu":"论坛管理",
	                    "menuJump":"列表",
	                    "tableName":"forum"
	                }
	            ],
	            "menu":"论坛管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"教学资源管理",
	                    "menuJump":"列表",
	                    "tableName":"jiaoxueziyuan"
	                }
	            ],
	            "menu":"教学资源管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                    ],
	                    "menu":"公告信息管理",
	                    "menuJump":"列表",
	                    "tableName":"news"
	                }
	            ],
	            "menu":"公告信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                    ],
	                    "menu":"学生管理",
	                    "menuJump":"列表",
	                    "tableName":"yonghu"
	                }
	            ],
	            "menu":"学生管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"学生成绩",
			            "menuJump":"列表",
			            "tableName":"xueshengchengji"
			        }
			    ],
			    "menu":"学生成绩"
			}
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"作业管理",
	                    "menuJump":"列表",
	                    "tableName":"zuoye"
	                }
	            ],
	            "menu":"作业管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "批改"
			            ],
			            "menu":"回答管理",
			            "menuJump":"列表",
			            "tableName":"huida"
			        }
			    ],
			    "menu":"回答管理"
			}
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"试卷管理",
	                    "menuJump":"列表",
	                    "tableName":"exampaper"
	                }
	            ],
	            "menu":"试卷管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"试题管理",
	                    "menuJump":"列表",
	                    "tableName":"examquestion"
	                }
	            ],
	            "menu":"试题管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "删除"
	                    ],
	                    "menu":"考试记录",
	                    "menuJump":"列表",
	                    "tableName":"examrecord"
	                }
	            ],
	            "menu":"考试管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"轮播图管理",
	                    "menuJump":"列表",
	                    "tableName":"config"
	                }
	            ],
	            "menu":"轮播图信息"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"教师",
	    "tableName":"jiaoshi"
	}
	,{
	    "backMenu":[
			{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除"
			            ],
			            "menu":"论坛管理",
			            "menuJump":"列表",
			            "tableName":"forum"
			        }
			    ],
			    "menu":"论坛管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增"
			            ],
			            "menu":"回答管理",
			            "menuJump":"列表",
			            "tableName":"huida"
			        }
			    ],
			    "menu":"回答管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"教师管理",
			            "menuJump":"列表",
			            "tableName":"jiaoshi"
			        }
			    ],
			    "menu":"教师管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"教学资源管理",
			            "menuJump":"列表",
			            "tableName":"jiaoxueziyuan"
			        }
			    ],
			    "menu":"教学资源管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"公告信息管理",
			            "menuJump":"列表",
			            "tableName":"news"
			        }
			    ],
			    "menu":"公告信息管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			            ],
			            "menu":"学生成绩",
			            "menuJump":"列表",
			            "tableName":"xueshengchengji"
			        }
			    ],
			    "menu":"学生成绩"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"作业管理",
			            "menuJump":"列表",
			            "tableName":"zuoye"
			        }
			    ],
			    "menu":"作业管理"
			}
			,{
	            "child":[
                    {
	                    "buttons":[
                            "查看",
                            "考试"
	                    ],
	                    "menu":"试卷管理",
	                    "menuJump":"列表",
	                    "tableName":"exampaper"
	                },
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"考试记录",
	                    "menuJump":"列表",
	                    "tableName":"examrecord"
	                },
	                {
	                    "buttons":[
	                        "查看",
	                        "删除"
	                    ],
	                    "menu":"错题本",
	                    "menuJump":"列表",
	                    "tableName":"examrewrongquestion"
	                }
	            ],
	            "menu":"考试管理"
	        }
	    ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"学生",
        "tableName":"yonghu"
	}
]
    }
}
export default menu;
