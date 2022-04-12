package com.example.gimmefud.controllers;

import com.cloudinary.*;
import com.cloudinary.utils.ObjectUtils;
import com.example.gimmefud.CoursesService;
import com.example.gimmefud.UploadService;
import com.example.gimmefud.data.CoursesRepository;
import com.example.gimmefud.data.Courses;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.print.attribute.standard.Media;
import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Map;


@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class CoursesController {

    @Autowired
    CoursesService coursesService;

    @Autowired
    UploadService uploadService;



    @GetMapping("/courses")
    public List<Courses> getAllCourses(){
        return coursesService.getAllCourses() ;
    }

    @PostMapping(path = "/courses", consumes = {"application/json"})
    public Courses createCourse(@RequestBody Courses courses){
        return coursesService.createCourse(courses);
    }

    @GetMapping("/courses/{rname}")
    public List<Courses> getCourse(@PathVariable String rname)
    {return coursesService.getCourse(rname);}

    @PostMapping("/courses")
    public List<Courses> imageUpload(@RequestParam("file") MultipartFile mfile ){
        String imageUrl = uploadService.postImage(mfile);
        System.out.println(imageUrl);
        return coursesService.createCourse(imageUrl);
    }

    @PutMapping("/courses")
    public Courses updateCourseDetails(@RequestBody Courses courses) {
        return   coursesService.updateCourse(courses);
    }

    @DeleteMapping("/courses/{course_name}")
    public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String course_name){
      return coursesService.deleteCourseById(course_name);
    }


}